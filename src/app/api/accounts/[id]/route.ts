// Single Social Account API
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

interface Params {
    params: Promise<{ id: string }>;
}

// GET: Fetch single account
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

        const account = await prisma.socialAccount.findFirst({
            where: { id, userId: session.user.id },
            select: {
                id: true,
                platform: true,
                handle: true,
                displayName: true,
                profileUrl: true,
                status: true,
                autoSync: true,
                lastSyncedAt: true,
                createdAt: true,
            },
        });

        if (!account) {
            return NextResponse.json(
                { success: false, error: "Account not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: account });
    } catch (error) {
        console.error("Get account error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to fetch account" },
            { status: 500 }
        );
    }
}

// PUT: Update account settings
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
        const { autoSync, displayName } = body;

        const account = await prisma.socialAccount.updateMany({
            where: { id, userId: session.user.id },
            data: {
                ...(autoSync !== undefined && { autoSync }),
                ...(displayName !== undefined && { displayName }),
            },
        });

        if (account.count === 0) {
            return NextResponse.json(
                { success: false, error: "Account not found" },
                { status: 404 }
            );
        }

        const updatedAccount = await prisma.socialAccount.findUnique({
            where: { id },
            select: {
                id: true,
                platform: true,
                handle: true,
                displayName: true,
                profileUrl: true,
                status: true,
                autoSync: true,
                lastSyncedAt: true,
                createdAt: true,
            },
        });

        return NextResponse.json({
            success: true,
            data: updatedAccount,
            message: "Account updated successfully"
        });
    } catch (error) {
        console.error("Update account error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to update account" },
            { status: 500 }
        );
    }
}

// DELETE: Disconnect account
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

        const account = await prisma.socialAccount.deleteMany({
            where: { id, userId: session.user.id },
        });

        if (account.count === 0) {
            return NextResponse.json(
                { success: false, error: "Account not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Account disconnected successfully"
        });
    } catch (error) {
        console.error("Delete account error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to disconnect account" },
            { status: 500 }
        );
    }
}
