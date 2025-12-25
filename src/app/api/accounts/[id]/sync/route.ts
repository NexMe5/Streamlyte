// Sync Account API - Triggers data sync for a social account
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

interface Params {
    params: Promise<{ id: string }>;
}

// POST: Trigger sync for an account
export async function POST(request: NextRequest, { params }: Params) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.id) {
            return NextResponse.json(
                { success: false, error: "Unauthorized" },
                { status: 401 }
            );
        }

        const { id } = await params;

        // Verify account belongs to user
        const account = await prisma.socialAccount.findFirst({
            where: { id, userId: session.user.id },
        });

        if (!account) {
            return NextResponse.json(
                { success: false, error: "Account not found" },
                { status: 404 }
            );
        }

        // In a real implementation, this would:
        // 1. Call the social platform's API using stored OAuth tokens
        // 2. Fetch latest metrics and content
        // 3. Store in MetricSnapshot and ContentItem tables

        // For now, we simulate a sync by generating mock data
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Check if we already have today's snapshot
        const existingSnapshot = await prisma.metricSnapshot.findFirst({
            where: {
                socialAccountId: id,
                date: today,
            },
        });

        if (!existingSnapshot) {
            // Generate mock snapshot for today
            const baseReach = Math.floor(Math.random() * 50000) + 1000;
            await prisma.metricSnapshot.create({
                data: {
                    userId: session.user.id,
                    socialAccountId: id,
                    date: today,
                    reach: baseReach,
                    impressions: baseReach + Math.floor(Math.random() * 5000),
                    likes: Math.floor(Math.random() * baseReach * 0.1),
                    comments: Math.floor(Math.random() * 500),
                    shares: Math.floor(Math.random() * 200),
                    saves: Math.floor(Math.random() * 300),
                    followers: Math.floor(Math.random() * 100000) + 5000,
                    views: Math.floor(Math.random() * 100000),
                    clicks: Math.floor(Math.random() * baseReach * 0.05),
                    engagementRate: Math.random() * 8 + 1,
                },
            });
        }

        // Update last synced time
        await prisma.socialAccount.update({
            where: { id },
            data: { lastSyncedAt: new Date() },
        });

        return NextResponse.json({
            success: true,
            message: "Sync completed successfully",
            data: { lastSyncedAt: new Date() },
        });
    } catch (error) {
        console.error("Sync error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to sync account" },
            { status: 500 }
        );
    }
}
