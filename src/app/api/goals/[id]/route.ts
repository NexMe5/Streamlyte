// Single Goal API
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

interface Params {
    params: Promise<{ id: string }>;
}

// GET: Fetch single goal
export async function GET(request: NextRequest, { params }: Params) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.id) {
            return NextResponse.json(
                { success: false, error: "Unauthorized" },
                { status: 401 }
            );
        }

        const { id } = await params;

        const goal = await prisma.goal.findFirst({
            where: { id, userId: session.user.id },
            include: {
                tasks: {
                    select: { id: true, title: true, status: true, dueDate: true },
                },
            },
        });

        if (!goal) {
            return NextResponse.json(
                { success: false, error: "Goal not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: goal });
    } catch (error) {
        console.error("Get goal error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to fetch goal" },
            { status: 500 }
        );
    }
}

// PUT: Update goal
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
        const { metricType, targetValue, currentValue, period, startDate, endDate, status } = body;

        const goal = await prisma.goal.updateMany({
            where: { id, userId: session.user.id },
            data: {
                ...(metricType && { metricType }),
                ...(targetValue !== undefined && { targetValue: parseFloat(targetValue) }),
                ...(currentValue !== undefined && { currentValue: parseFloat(currentValue) }),
                ...(period && { period }),
                ...(startDate && { startDate: new Date(startDate) }),
                ...(endDate && { endDate: new Date(endDate) }),
                ...(status && { status }),
            },
        });

        if (goal.count === 0) {
            return NextResponse.json(
                { success: false, error: "Goal not found" },
                { status: 404 }
            );
        }

        const updatedGoal = await prisma.goal.findUnique({ where: { id } });

        return NextResponse.json({
            success: true,
            data: updatedGoal,
            message: "Goal updated successfully"
        });
    } catch (error) {
        console.error("Update goal error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to update goal" },
            { status: 500 }
        );
    }
}

// DELETE: Delete goal
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

        const goal = await prisma.goal.deleteMany({
            where: { id, userId: session.user.id },
        });

        if (goal.count === 0) {
            return NextResponse.json(
                { success: false, error: "Goal not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Goal deleted successfully"
        });
    } catch (error) {
        console.error("Delete goal error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to delete goal" },
            { status: 500 }
        );
    }
}
