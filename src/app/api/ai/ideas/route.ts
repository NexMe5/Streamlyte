// AI Content Ideas API - Mock Service
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

// GET: Get content ideas for user
export async function GET() {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.id) {
            return NextResponse.json(
                { success: false, error: "Unauthorized" },
                { status: 401 }
            );
        }

        const ideas = await prisma.contentIdea.findMany({
            where: { userId: session.user.id },
            orderBy: [{ status: "asc" }, { confidenceScore: "desc" }],
        });

        return NextResponse.json({ success: true, data: ideas });
    } catch (error) {
        console.error("Get ideas error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to fetch ideas" },
            { status: 500 }
        );
    }
}

// POST: Generate new content ideas (mock AI service)
export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.id) {
            return NextResponse.json(
                { success: false, error: "Unauthorized" },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { platform } = body;

        // Get user's niche
        const user = await prisma.user.findUnique({
            where: { id: session.user.id },
            select: { niche: true },
        });

        // Get recent high-performing content for inspiration
        const recentContent = await prisma.contentItem.findMany({
            where: {
                socialAccount: { userId: session.user.id },
            },
            orderBy: { engagementRate: "desc" },
            take: 5,
            select: { title: true, type: true },
        });

        // Mock AI-generated ideas based on niche and recent content
        const mockIdeas = generateMockIdeas(user?.niche || "general", platform, recentContent);

        // Store ideas in database
        const createdIdeas = await Promise.all(
            mockIdeas.map(idea =>
                prisma.contentIdea.create({
                    data: {
                        userId: session.user.id,
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        platform: idea.platform as any,
                        topic: idea.topic,
                        suggestedCaption: idea.caption,
                        suggestedHashtags: JSON.stringify(idea.hashtags),
                        confidenceScore: idea.confidence,
                        status: "suggested",
                    },
                })
            )
        );

        return NextResponse.json({
            success: true,
            data: createdIdeas,
            message: `Generated ${createdIdeas.length} content ideas`,
        });
    } catch (error) {
        console.error("Generate ideas error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to generate ideas" },
            { status: 500 }
        );
    }
}

// Mock idea generation (would be replaced with real AI)
function generateMockIdeas(
    niche: string,
    platform?: string,
    recentContent?: { title: string | null; type: string }[]
) {
    const nicheIdeas: Record<string, Array<{ topic: string; caption: string; hashtags: string[] }>> = {
        fitness: [
            {
                topic: "Morning workout routine reveal",
                caption: "Here's my exact morning routine that helped me stay consistent for 365 days straight! 💪 The secret? Keep it simple and make it enjoyable.",
                hashtags: ["#fitness", "#morningroutine", "#workout", "#motivation", "#health"],
            },
            {
                topic: "Meal prep Sunday tips",
                caption: "Meal prep Sunday is here! 🥗 Here are 5 meals that I'm preparing for the week. Takes 2 hours, saves countless decisions!",
                hashtags: ["#mealprep", "#healthyeating", "#sundayroutine", "#nutrition", "#fitness"],
            },
            {
                topic: "Common workout mistakes",
                caption: "Stop making these 3 mistakes in the gym! Number 2 is something I see every single day 👀",
                hashtags: ["#gymtips", "#fitness", "#workout", "#personaltrainer", "#fitfam"],
            },
        ],
        tech: [
            {
                topic: "New tool that 10x my productivity",
                caption: "Found this tool last week and it's already saved me 5+ hours! Here's how I use it for daily tasks...",
                hashtags: ["#productivity", "#tech", "#tools", "#developer", "#coding"],
            },
            {
                topic: "Hot take on latest tech trend",
                caption: "Unpopular opinion: AI won't replace developers, but developers who use AI will replace those who don't. Here's why...",
                hashtags: ["#tech", "#ai", "#programming", "#developer", "#futureofwork"],
            },
            {
                topic: "My coding setup tour 2024",
                caption: "You asked for it! Complete tour of my $5000 coding setup. Every piece of gear explained 💻",
                hashtags: ["#setuptour", "#coding", "#developer", "#tech", "#workspace"],
            },
        ],
        lifestyle: [
            {
                topic: "5AM morning routine",
                caption: "Waking up at 5AM changed my life. Not because of the time, but because of what I do in those quiet hours ☀️",
                hashtags: ["#morningroutine", "#lifestyle", "#productivity", "#selfcare", "#growth"],
            },
            {
                topic: "Monthly reset routine",
                caption: "It's the first of the month! Here's my reset routine to start fresh and stay organized 📝",
                hashtags: ["#monthlyreset", "#organization", "#lifestyle", "#goals", "#planning"],
            },
            {
                topic: "Things I stopped buying",
                caption: "Minimalism update: 10 things I stopped buying this year that saved me $2000+ 💰",
                hashtags: ["#minimalism", "#savingmoney", "#lifestyle", "#intentionalliving", "#simple"],
            },
        ],
        general: [
            {
                topic: "Behind the scenes of my day",
                caption: "A raw, unfiltered look at what my typical day actually looks like. No filters, no fancy edits!",
                hashtags: ["#dayinmylife", "#behindthescenes", "#authentic", "#reallife", "#content"],
            },
            {
                topic: "Q&A time with followers",
                caption: "You asked, I'm answering! Drop your questions below and let's chat 💬",
                hashtags: ["#qanda", "#askme", "#community", "#engage", "#questions"],
            },
            {
                topic: "Things I learned this month",
                caption: "Monthly reflection: 3 lessons that completely changed my perspective this month 📚",
                hashtags: ["#lessons", "#growth", "#reflection", "#learning", "#mindset"],
            },
        ],
    };

    const ideas = nicheIdeas[niche] || nicheIdeas.general;
    const platforms = platform ? [platform] : ["instagram", "youtube", "twitter", "linkedin"];

    return ideas.map((idea, index) => ({
        platform: platforms[index % platforms.length],
        topic: idea.topic,
        caption: idea.caption,
        hashtags: idea.hashtags,
        confidence: Math.random() * 0.3 + 0.7, // 0.7 - 1.0
    }));
}
