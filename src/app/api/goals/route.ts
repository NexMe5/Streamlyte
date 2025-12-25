import { NextResponse } from "next/server";
import { mockGoals } from "@/lib/mock-data";

export async function GET() {
    return NextResponse.json({
        success: true,
        data: mockGoals
    });
}

export async function POST() {
    return NextResponse.json({ success: true, message: "Mock goal created" });
}
