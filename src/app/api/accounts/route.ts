import { NextResponse } from "next/server";
import { mockSocialAccounts } from "@/lib/mock-data";

export async function GET() {
    return NextResponse.json({
        success: true,
        data: mockSocialAccounts
    });
}

export async function POST() {
    return NextResponse.json({ success: true, message: "Mock account connected" });
}
