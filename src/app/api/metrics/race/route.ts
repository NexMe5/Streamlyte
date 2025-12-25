import { NextResponse } from "next/server";
import { mockRaceData } from "@/lib/mock-data";

export async function GET() {
    return NextResponse.json({
        success: true,
        data: mockRaceData
    });
}
