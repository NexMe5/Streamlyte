// Main Dashboard Page
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import TopBar from "@/components/layout/TopBar";
import KPICard from "@/components/ui/KPICard";
import ContentCard from "@/components/ui/ContentCard";
import {
    ChartBarIcon,
    UsersIcon,
    DocumentTextIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline";

// Dynamic imports for chart components (to avoid SSR issues with echarts)
const Bar3DChart = dynamic(() => import("@/components/charts/Bar3DChart"), {
    ssr: false,
    loading: () => <div className="skeleton h-full w-full rounded-lg" />,
});

const Line3DChart = dynamic(() => import("@/components/charts/Line3DChart"), {
    ssr: false,
    loading: () => <div className="skeleton h-full w-full rounded-lg" />,
});

const GoalProgressChart = dynamic(
    () => import("@/components/charts/GoalProgressChart"),
    {
        ssr: false,
        loading: () => <div className="skeleton h-full w-full rounded-lg" />,
    }
);

const BarRaceChart = dynamic(() => import("@/components/charts/BarRaceChart"), {
    ssr: false,
    loading: () => <div className="skeleton h-full w-full rounded-lg" />,
});

interface DashboardData {
    kpis: {
        todayReach: number;
        reachChange: number;
        totalFollowers: number;
        followersChange: number;
        postsLast7Days: number;
        postsChange: number;
        avgEngagement: number;
        engagementChange: number;
    };
    platformData: Array<{
        platform: string;
        date: string;
        reach: number;
    }>;
    trendsData: Array<{
        date: string;
        reach: number;
        impressions: number;
        engagement: number;
    }>;
    goals: Array<{
        id: string;
        metricType: string;
        targetValue: number;
        currentValue: number;
        status: string;
    }>;
    topContent: Array<{
        id: string;
        title?: string;
        type: string;
        thumbnail?: string;
        reach: number;
        likes: number;
        engagementRate: number;
        publishedAt: string;
        socialAccount: {
            platform: string;
            handle: string;
        };
    }>;
    raceData: Array<{
        date: string;
        [key: string]: string | number;
    }>;
}

export default function DashboardPage() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<DashboardData | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState("all");
    const [selectedDateRange, setSelectedDateRange] = useState("7d");

    useEffect(() => {
        fetchDashboardData();
    }, [selectedPlatform, selectedDateRange]);

    const fetchDashboardData = async () => {
        setLoading(true);
        try {
            const days = selectedDateRange === "7d" ? 7 : selectedDateRange === "14d" ? 14 : selectedDateRange === "30d" ? 30 : 90;

            // Fetch all dashboard data in parallel
            const [overviewRes, platformRes, trendsRes, goalsRes, topContentRes, raceRes] = await Promise.all([
                fetch(`/api/metrics/overview?days=${days}`),
                fetch(`/api/metrics/by-platform?days=${days}`),
                fetch(`/api/metrics/trends?days=${days}${selectedPlatform !== "all" ? `&platform=${selectedPlatform}` : ""}`),
                fetch("/api/goals?status=active"),
                fetch("/api/content/top?days=7&limit=5"),
                fetch("/api/metrics/race"),
            ]);

            const [overview, platform, trends, goals, topContent, race] = await Promise.all([
                overviewRes.json(),
                platformRes.json(),
                trendsRes.json(),
                goalsRes.json(),
                topContentRes.json(),
                raceRes.json(),
            ]);

            setData({
                kpis: overview.data || {
                    todayReach: 0,
                    reachChange: 0,
                    totalFollowers: 0,
                    followersChange: 0,
                    postsLast7Days: 0,
                    postsChange: 0,
                    avgEngagement: 0,
                    engagementChange: 0,
                },
                platformData: platform.data?.byDate || [],
                trendsData: trends.data || [],
                goals: goals.data || [],
                topContent: topContent.data || [],
                raceData: race.data || [],
            });
        } catch (error) {
            console.error("Failed to fetch dashboard data:", error);
        } finally {
            setLoading(false);
        }
    };

    const formatNumber = (num: number) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000).toFixed(1) + "K";
        return num.toString();
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
                {/* Page Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
                    <p className="text-foreground-muted">
                        Welcome back! Here's your analytics overview.
                    </p>
                </div>

                {/* KPI Strip */}
                <div className="mb-6 grid grid-cols-4 gap-4">
                    <KPICard
                        title="Today's Reach"
                        value={formatNumber(data?.kpis.todayReach || 0)}
                        change={data?.kpis.reachChange}
                        loading={loading}
                        icon={<ChartBarIcon className="h-5 w-5" />}
                    />
                    <KPICard
                        title="Followers"
                        value={formatNumber(data?.kpis.totalFollowers || 0)}
                        change={data?.kpis.followersChange}
                        loading={loading}
                        icon={<UsersIcon className="h-5 w-5" />}
                    />
                    <KPICard
                        title="Posts (7 days)"
                        value={data?.kpis.postsLast7Days || 0}
                        change={data?.kpis.postsChange}
                        loading={loading}
                        icon={<DocumentTextIcon className="h-5 w-5" />}
                    />
                    <KPICard
                        title="Avg Engagement"
                        value={`${(data?.kpis.avgEngagement || 0).toFixed(1)}%`}
                        change={data?.kpis.engagementChange}
                        loading={loading}
                        icon={<SparklesIcon className="h-5 w-5" />}
                    />
                </div>

                {/* Charts Grid */}
                <div className="mb-6 grid grid-cols-2 gap-6">
                    {/* 3D Bar Chart */}
                    <div className="card p-4">
                        <h3 className="mb-4 text-lg font-semibold text-foreground">
                            Reach by Platform
                        </h3>
                        <div className="h-96">
                            {loading ? (
                                <div className="skeleton h-full w-full rounded-lg" />
                            ) : (
                                <Bar3DChart data={data?.platformData || []} />
                            )}
                        </div>
                    </div>

                    {/* 3D Line Chart */}
                    <div className="card p-4">
                        <h3 className="mb-4 text-lg font-semibold text-foreground">
                            Metrics Over Time
                        </h3>
                        <div className="h-96">
                            {loading ? (
                                <div className="skeleton h-full w-full rounded-lg" />
                            ) : (
                                <Line3DChart data={data?.trendsData || []} />
                            )}
                        </div>
                    </div>

                    {/* Race Chart - Full Width */}
                    <div className="col-span-2 card p-4">
                        <BarRaceChart data={data?.raceData || []} />
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-3 gap-6">
                    {/* Goal Progress */}
                    <div className="card p-4">
                        <h3 className="mb-4 text-lg font-semibold text-foreground">
                            Goal Progress
                        </h3>
                        <div className="h-48">
                            {loading ? (
                                <div className="skeleton h-full w-full rounded-lg" />
                            ) : (
                                <GoalProgressChart goals={data?.goals || []} />
                            )}
                        </div>
                        <div className="mt-4 space-y-2">
                            {data?.goals.slice(0, 3).map((goal) => (
                                <div key={goal.id} className="flex items-center justify-between">
                                    <span className="text-sm text-foreground-muted capitalize">
                                        {goal.metricType}
                                    </span>
                                    <span className="text-sm font-medium text-foreground">
                                        {Math.round((goal.currentValue / goal.targetValue) * 100)}%
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Top Performing Content */}
                    <div className="col-span-2 card p-4">
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-foreground">
                                Top Performing Content
                            </h3>
                            <a href="/content" className="text-sm text-accent-primary hover:underline">
                                View all
                            </a>
                        </div>
                        <div className="space-y-3">
                            {loading ? (
                                Array.from({ length: 5 }).map((_, i) => (
                                    <div key={i} className="skeleton h-20 w-full rounded-lg" />
                                ))
                            ) : data?.topContent && data.topContent.length > 0 ? (
                                data.topContent.map((content) => (
                                    <ContentCard key={content.id} content={content} />
                                ))
                            ) : (
                                <div className="flex h-40 items-center justify-center text-foreground-muted">
                                    No content found. Connect your social accounts to get started!
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
