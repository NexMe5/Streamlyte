// Goal Progress Chart - Radial/Donut Chart
"use client";

import { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface GoalProgressChartProps {
    goals: Array<{
        id: string;
        metricType: string;
        targetValue: number;
        currentValue: number;
        status: string;
    }>;
}

const metricColors: Record<string, string> = {
    reach: "#00d4ff",
    followers: "#a855f7",
    posts: "#3fb950",
    engagement: "#d29922",
    views: "#f85149",
    revenue: "#ec6547",
    impressions: "#58a6ff",
};

export default function GoalProgressChart({ goals }: GoalProgressChartProps) {
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<echarts.ECharts | null>(null);

    useEffect(() => {
        if (!chartRef.current || goals.length === 0) return;

        if (!chartInstance.current) {
            chartInstance.current = echarts.init(chartRef.current);
        }

        const chartData = goals
            .filter((g) => g.status === "active")
            .slice(0, 4)
            .map((goal) => {
                const progress = Math.min((goal.currentValue / goal.targetValue) * 100, 100);
                return {
                    name: goal.metricType.charAt(0).toUpperCase() + goal.metricType.slice(1),
                    value: Math.round(progress),
                    itemStyle: {
                        color: metricColors[goal.metricType] || "#00d4ff",
                    },
                };
            });

        const option = {
            backgroundColor: "transparent",
            tooltip: {
                trigger: "item",
                formatter: "{b}: {c}%",
            },
            legend: {
                orient: "vertical",
                right: 10,
                top: "center",
                textStyle: {
                    color: "#8b949e",
                },
            },
            series: [
                {
                    type: "pie",
                    radius: ["45%", "70%"],
                    center: ["40%", "50%"],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 8,
                        borderColor: "#161b22",
                        borderWidth: 2,
                    },
                    label: {
                        show: true,
                        position: "center",
                        formatter: () => {
                            const avg = chartData.reduce((sum, d) => sum + d.value, 0) / chartData.length;
                            return `{value|${Math.round(avg)}%}\n{label|Avg Progress}`;
                        },
                        rich: {
                            value: {
                                fontSize: 28,
                                fontWeight: "bold",
                                color: "#f0f6fc",
                            },
                            label: {
                                fontSize: 12,
                                color: "#8b949e",
                                padding: [5, 0, 0, 0],
                            },
                        },
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 16,
                            fontWeight: "bold",
                        },
                    },
                    labelLine: {
                        show: false,
                    },
                    data: chartData,
                },
            ],
        };

        chartInstance.current.setOption(option);

        const handleResize = () => {
            chartInstance.current?.resize();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [goals]);

    return (
        <div
            ref={chartRef}
            className="h-full w-full"
            style={{ minHeight: "200px" }}
        />
    );
}
