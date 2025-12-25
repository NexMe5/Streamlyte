import { NextResponse } from "next/server";
import { mockTasks } from "@/lib/mock-data";

export async function GET() {
    return NextResponse.json({
        success: true,
        data: mockTasks
    });
}

export async function POST() {
    return NextResponse.json({ success: true, message: "Mock task created" });
}
