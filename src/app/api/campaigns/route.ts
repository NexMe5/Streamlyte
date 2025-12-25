import { NextResponse } from "next/server";
import { mockCampaigns } from "@/lib/mock-data";

export async function GET() {
    return NextResponse.json({
        success: true,
        data: mockCampaigns
    });
}

export async function POST() {
    return NextResponse.json({ success: true, message: "Mock campaign created" });
}
