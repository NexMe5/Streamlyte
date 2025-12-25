// Content & Trends Page
"use client";

import { useState, useEffect } from "react";
import TopBar from "@/components/layout/TopBar";

interface ContentItem {
    id: string;
    title?: string;
    type: string;
    thumbnail?: string;
    reach: number;
    impressions: number;
    likes: number;
    comments: number;
    shares: number;
    engagementRate: number;
    publishedAt: string;
    socialAccount: {
        platform: string;
        handle: string;
    };
}

const typeColors: Record<string, string> = {
    post: "bg-blue-500",
    reel: "bg-pink-500",
    short: "bg-red-500",
    story: "bg-orange-500",
    video: "bg-purple-500",
    tweet: "bg-sky-400",
    article: "bg-green-500",
};

export default function ContentPage() {
    const [content, setContent] = useState<ContentItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedPlatform, setSelectedPlatform] = useState("all");
    const [selectedDateRange, setSelectedDateRange] = useState("30d");
    const [sortBy, setSortBy] = useState<"reach" | "engagement" | "date">("reach");

    useEffect(() => {
        fetchContent();
    }, [selectedPlatform, selectedDateRange]);

    const fetchContent = async () => {
        setLoading(true);
        try {
            const days = selectedDateRange === "7d" ? 7 : selectedDateRange === "14d" ? 14 : 30;
            const platformParam = selectedPlatform !== "all" ? `&platform=${selectedPlatform}` : "";
            const res = await fetch(`/api/content?days=${days}${platformParam}`);
            const data = await res.json();
            if (data.success) {
                setContent(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch content:", error);
        } finally {
            setLoading(false);
        }
    };

    const sortedContent = [...content].sort((a, b) => {
        if (sortBy === "reach") return b.reach - a.reach;
        if (sortBy === "engagement") return b.engagementRate - a.engagementRate;
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });

    const formatNumber = (num: number) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000).toFixed(1) + "K";
        return num.toString();
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    const platformNames: Record<string, string> = {
        instagram: "Instagram",
        youtube: "YouTube",
        linkedin: "LinkedIn",
        twitter: "Twitter/X",
    };

    return (
        <div className="flex flex-col">
            <TopBar
                selectedPlatform={selectedPlatform}
                onPlatformChange={setSelectedPlatform}
                selectedDateRange={selectedDateRange}
                onDateRangeChange={setSelectedDateRange}
            />

            <div className="p-6">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">Content & Trends</h1>
                        <p className="text-foreground-muted">
                            Analyze your content performance across platforms
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-foreground-muted">Sort by:</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                            className="input"
                        >
                            <option value="reach">Reach</option>
                            <option value="engagement">Engagement</option>
                            <option value="date">Date</option>
                        </select>
                    </div>
                </div>

                {/* Stats Summary */}
                <div className="mb-6 grid grid-cols-4 gap-4">
                    <div className="card p-4">
                        <p className="text-sm text-foreground-muted">Total Content</p>
                        <p className="text-2xl font-bold text-foreground">{content.length}</p>
                    </div>
                    <div className="card p-4">
                        <p className="text-sm text-foreground-muted">Total Reach</p>
                        <p className="text-2xl font-bold text-accent-primary">
                            {formatNumber(content.reduce((sum, c) => sum + c.reach, 0))}
                        </p>
                    </div>
                    <div className="card p-4">
                        <p className="text-sm text-foreground-muted">Avg Engagement</p>
                        <p className="text-2xl font-bold text-accent-secondary">
                            {content.length > 0
                                ? (content.reduce((sum, c) => sum + c.engagementRate, 0) / content.length).toFixed(1)
                                : 0}
                            %
                        </p>
                    </div>
                    <div className="card p-4">
                        <p className="text-sm text-foreground-muted">Total Likes</p>
                        <p className="text-2xl font-bold text-foreground">
                            {formatNumber(content.reduce((sum, c) => sum + c.likes, 0))}
                        </p>
                    </div>
                </div>

                {/* Content Table */}
                <div className="card overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-border bg-background-tertiary">
                                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground-muted">
                                        Content
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground-muted">
                                        Platform
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground-muted">
                                        Type
                                    </th>
                                    <th className="px-4 py-3 text-right text-sm font-medium text-foreground-muted">
                                        Reach
                                    </th>
                                    <th className="px-4 py-3 text-right text-sm font-medium text-foreground-muted">
                                        Likes
                                    </th>
                                    <th className="px-4 py-3 text-right text-sm font-medium text-foreground-muted">
                                        Comments
                                    </th>
                                    <th className="px-4 py-3 text-right text-sm font-medium text-foreground-muted">
                                        Eng. Rate
                                    </th>
                                    <th className="px-4 py-3 text-right text-sm font-medium text-foreground-muted">
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    Array.from({ length: 5 }).map((_, i) => (
                                        <tr key={i} className="border-b border-border">
                                            <td colSpan={8} className="px-4 py-3">
                                                <div className="skeleton h-12 w-full rounded" />
                                            </td>
                                        </tr>
                                    ))
                                ) : sortedContent.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan={8}
                                            className="px-4 py-12 text-center text-foreground-muted"
                                        >
                                            No content found for this period
                                        </td>
                                    </tr>
                                ) : (
                                    sortedContent.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="border-b border-border transition-colors hover:bg-background-tertiary"
                                        >
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg bg-background-tertiary">
                                                        {item.thumbnail ? (
                                                            <img
                                                                src={item.thumbnail}
                                                                alt=""
                                                                className="h-full w-full object-cover"
                                                            />
                                                        ) : (
                                                            <div className="flex h-full w-full items-center justify-center text-lg">
                                                                📷
                                                            </div>
                                                        )}
                                                    </div>
                                                    <span className="max-w-xs truncate text-sm font-medium text-foreground">
                                                        {item.title || "Untitled"}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-sm text-foreground">
                                                {platformNames[item.socialAccount.platform]}
                                            </td>
                                            <td className="px-4 py-3">
                                                <span
                                                    className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium text-white ${typeColors[item.type] || "bg-gray-500"
                                                        }`}
                                                >
                                                    {item.type}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-right text-sm font-medium text-accent-primary">
                                                {formatNumber(item.reach)}
                                            </td>
                                            <td className="px-4 py-3 text-right text-sm text-foreground">
                                                {formatNumber(item.likes)}
                                            </td>
                                            <td className="px-4 py-3 text-right text-sm text-foreground">
                                                {formatNumber(item.comments)}
                                            </td>
                                            <td className="px-4 py-3 text-right text-sm font-medium text-accent-secondary">
                                                {item.engagementRate.toFixed(1)}%
                                            </td>
                                            <td className="px-4 py-3 text-right text-sm text-foreground-muted">
                                                {formatDate(item.publishedAt)}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
