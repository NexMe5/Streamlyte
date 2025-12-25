// Single Task API
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

interface Params {
    params: Promise<{ id: string }>;
}

// PUT: Update task
export async function PUT(request: NextRequest, { params }: Params) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.id) {
            return NextResponse.json(
                { success: false, error: "Unauthorized" },
                { status: 401 }
            );
        }

        const { id } = await params;
        const body = await request.json();
        const { title, description, dueDate, status, priority, goalId } = body;

        // Check if task is being completed
        const existingTask = await prisma.task.findFirst({
            where: { id, userId: session.user.id },
        });

        if (!existingTask) {
            return NextResponse.json(
                { success: false, error: "Task not found" },
                { status: 404 }
            );
        }

        const completedAt = status === "done" && existingTask.status !== "done"
            ? new Date()
            : existingTask.completedAt;

        const task = await prisma.task.update({
            where: { id },
            data: {
                ...(title && { title }),
                ...(description !== undefined && { description }),
                ...(dueDate !== undefined && { dueDate: dueDate ? new Date(dueDate) : null }),
                ...(status && { status }),
                ...(priority && { priority }),
                ...(goalId !== undefined && { goalId }),
                completedAt,
            },
            include: {
                goal: {
                    select: { id: true, metricType: true, targetValue: true },
                },
            },
        });

        // Update user streak if task was completed
        if (status === "done" && existingTask.status !== "done") {
            await updateStreak(session.user.id);
        }

        return NextResponse.json({
            success: true,
            data: task,
            message: "Task updated successfully"
        });
    } catch (error) {
        console.error("Update task error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to update task" },
            { status: 500 }
        );
    }
}

// DELETE: Delete task
export async function DELETE(request: NextRequest, { params }: Params) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.id) {
            return NextResponse.json(
                { success: false, error: "Unauthorized" },
                { status: 401 }
            );
        }

        const { id } = await params;

        const task = await prisma.task.deleteMany({
            where: { id, userId: session.user.id },
        });

        if (task.count === 0) {
            return NextResponse.json(
                { success: false, error: "Task not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Task deleted successfully"
        });
    } catch (error) {
        console.error("Delete task error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to delete task" },
            { status: 500 }
        );
    }
}

// Helper to update user streak
async function updateStreak(userId: string) {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        // Check if user completed a task yesterday
        const yesterdayTask = await prisma.task.findFirst({
            where: {
                userId,
                status: "done",
                completedAt: {
                    gte: yesterday,
                    lt: today,
                },
            },
        });

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { streakCount: true },
        });

        if (yesterdayTask) {
            // Continue streak
            await prisma.user.update({
                where: { id: userId },
                data: { streakCount: (user?.streakCount || 0) + 1 },
            });
        } else {
            // Reset streak to 1
            await prisma.user.update({
                where: { id: userId },
                data: { streakCount: 1 },
            });
        }
    } catch (error) {
        console.error("Update streak error:", error);
    }
}
