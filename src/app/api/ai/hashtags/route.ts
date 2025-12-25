// AI Hashtag Recommender API - Mock Service
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// POST: Generate hashtag recommendations
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
        const { caption, platform, niche } = body;

        if (!caption) {
            return NextResponse.json(
                { success: false, error: "Caption is required" },
                { status: 400 }
            );
        }

        // Mock hashtag recommendation (would be replaced with real AI)
        const hashtags = generateHashtags(caption, platform, niche);

        return NextResponse.json({
            success: true,
            data: {
                hashtags,
                usage: {
                    recommended: hashtags.slice(0, 10),
                    trending: hashtags.filter(h => h.trending).slice(0, 5),
                    niche: hashtags.filter(h => h.niche).slice(0, 5),
                },
            },
        });
    } catch (error) {
        console.error("Hashtag recommendation error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to generate hashtags" },
            { status: 500 }
        );
    }
}

interface Hashtag {
    tag: string;
    score: number;
    trending: boolean;
    niche: boolean;
    usage: "high" | "medium" | "low";
}

function generateHashtags(caption: string, platform?: string, niche?: string): Hashtag[] {
    // Base hashtags by platform
    const platformHashtags: Record<string, string[]> = {
        instagram: ["#instagram", "#instagood", "#photooftheday", "#instadaily"],
        youtube: ["#youtube", "#youtuber", "#subscribe", "#video"],
        twitter: ["#trending", "#viral", "#discussion", "#thread"],
        linkedin: ["#linkedin", "#professional", "#career", "#business"],
    };

    // Niche-specific hashtags
    const nicheHashtags: Record<string, string[]> = {
        fitness: ["#fitness", "#workout", "#gym", "#health", "#fitfam", "#motivation", "#training"],
        tech: ["#tech", "#technology", "#coding", "#programming", "#developer", "#innovation"],
        lifestyle: ["#lifestyle", "#life", "#dailylife", "#minimalism", "#wellness", "#selfcare"],
        food: ["#food", "#foodie", "#recipe", "#cooking", "#homemade", "#delicious"],
        travel: ["#travel", "#wanderlust", "#adventure", "#explore", "#vacation", "#travelphotography"],
        fashion: ["#fashion", "#style", "#ootd", "#fashionista", "#outfit", "#trendy"],
        business: ["#entrepreneur", "#business", "#startup", "#success", "#motivation", "#mindset"],
    };

    // Trending hashtags (mock)
    const trendingHashtags = ["#trending", "#viral", "#fyp", "#explore", "#2024"];

    // Extract keywords from caption
    const words = caption.toLowerCase().split(/\s+/);
    const keywordHashtags = words
        .filter(word => word.length > 4)
        .slice(0, 5)
        .map(word => `#${word.replace(/[^a-z]/g, "")}`);

    // Combine all hashtags
    const allHashtags: Hashtag[] = [];

    // Add niche hashtags
    if (niche && nicheHashtags[niche]) {
        nicheHashtags[niche].forEach(tag => {
            allHashtags.push({
                tag,
                score: Math.random() * 0.3 + 0.7,
                trending: false,
                niche: true,
                usage: Math.random() > 0.5 ? "high" : "medium",
            });
        });
    }

    // Add platform hashtags
    if (platform && platformHashtags[platform]) {
        platformHashtags[platform].forEach(tag => {
            allHashtags.push({
                tag,
                score: Math.random() * 0.2 + 0.6,
                trending: false,
                niche: false,
                usage: "high",
            });
        });
    }

    // Add trending
    trendingHashtags.forEach(tag => {
        allHashtags.push({
            tag,
            score: Math.random() * 0.2 + 0.8,
            trending: true,
            niche: false,
            usage: "high",
        });
    });

    // Add keyword-based
    keywordHashtags.forEach(tag => {
        if (tag.length > 2) {
            allHashtags.push({
                tag,
                score: Math.random() * 0.3 + 0.5,
                trending: false,
                niche: false,
                usage: "low",
            });
        }
    });

    // Sort by score and dedupe
    const seen = new Set<string>();
    return allHashtags
        .filter(h => {
            if (seen.has(h.tag)) return false;
            seen.add(h.tag);
            return true;
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 30);
}
