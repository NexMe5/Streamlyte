import { NextResponse } from "next/server";
import { mockContent } from "@/lib/mock-data";

export async function GET() {
    return NextResponse.json({
        success: true,
        data: mockContent.slice(0, 3)
    });
}
