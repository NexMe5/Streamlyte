import { NextResponse } from "next/server";
import { mockPlatformMetrics } from "@/lib/mock-data";

export async function GET() {
    return NextResponse.json({
        success: true,
        data: mockPlatformMetrics
    });
}
