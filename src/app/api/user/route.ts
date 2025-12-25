// User Profile API
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

// GET: Fetch current user profile
export async function GET() {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.id) {
            return NextResponse.json(
                { success: false, error: "Unauthorized" },
                { status: 401 }
            );
        }

        const user = await prisma.user.findUnique({
            where: { id: session.user.id },
            select: {
                id: true,
                name: true,
                email: true,
                avatar: true,
                timezone: true,
                niche: true,
                primaryPlatform: true,
                streakCount: true,
                createdAt: true,
            },
        });

        if (!user) {
            return NextResponse.json(
                { success: false, error: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: user });
    } catch (error) {
        console.error("Get user error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to fetch user" },
            { status: 500 }
        );
    }
}

// PUT: Update user profile
export async function PUT(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.id) {
            return NextResponse.json(
                { success: false, error: "Unauthorized" },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { name, avatar, timezone, niche, primaryPlatform } = body;

        const user = await prisma.user.update({
            where: { id: session.user.id },
            data: {
                ...(name && { name }),
                ...(avatar !== undefined && { avatar }),
                ...(timezone && { timezone }),
                ...(niche !== undefined && { niche }),
                ...(primaryPlatform !== undefined && { primaryPlatform }),
            },
            select: {
                id: true,
                name: true,
                email: true,
                avatar: true,
                timezone: true,
                niche: true,
                primaryPlatform: true,
                streakCount: true,
                createdAt: true,
            },
        });

        return NextResponse.json({
            success: true,
            data: user,
            message: "Profile updated successfully"
        });
    } catch (error) {
        console.error("Update user error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to update user" },
            { status: 500 }
        );
    }
}
