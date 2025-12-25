// 3D Bar Chart Component using ECharts GL
"use client";

import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "echarts-gl";

interface Bar3DChartProps {
    data: Array<{
        platform: string;
        date: string;
        reach: number;
    }>;
    title?: string;
}

const platformColors: Record<string, string> = {
    instagram: "#E4405F",
    youtube: "#FF0000",
    linkedin: "#0077B5",
    twitter: "#1DA1F2",
};

const platformOrder = ["instagram", "youtube", "linkedin", "twitter"];

export default function Bar3DChart({ data, title }: Bar3DChartProps) {
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<echarts.ECharts | null>(null);

    useEffect(() => {
        if (!chartRef.current || data.length === 0) return;

        // Initialize chart
        if (!chartInstance.current) {
            chartInstance.current = echarts.init(chartRef.current);
        }

        // Get unique dates and platforms
        const dates = [...new Set(data.map((d) => d.date))].sort();
        const platforms = platformOrder.filter((p) =>
            data.some((d) => d.platform === p)
        );

        // Transform data for 3D bar chart
        const chartData: number[][] = [];
        data.forEach((item) => {
            const xIndex = platforms.indexOf(item.platform);
            const yIndex = dates.indexOf(item.date);
            if (xIndex !== -1 && yIndex !== -1) {
                chartData.push([xIndex, yIndex, item.reach]);
            }
        });

        // Find max value for scaling
        const maxValue = Math.max(...chartData.map((d) => d[2]), 1);

        const option = {
            backgroundColor: "transparent",
            title: title
                ? {
                    text: title,
                    left: "center",
                    textStyle: {
                        color: "#f0f6fc",
                        fontSize: 16,
                        fontWeight: 500,
                    },
                }
                : undefined,
            tooltip: {
                formatter: (params: { value: number[] }) => {
                    const platform = platforms[params.value[0]];
                    const date = dates[params.value[1]];
                    const reach = params.value[2];
                    return `<div style="padding: 8px;">
            <div style="font-weight: 600; margin-bottom: 4px;">${platform.charAt(0).toUpperCase() + platform.slice(1)}</div>
            <div style="color: #8b949e;">${date}</div>
            <div style="color: #00d4ff; font-weight: 600;">Reach: ${reach.toLocaleString()}</div>
          </div>`;
                },
            },
            visualMap: {
                show: false,
                dimension: 2,
                min: 0,
                max: maxValue,
                inRange: {
                    color: ["#00d4ff", "#7c3aed", "#a855f7"],
                },
            },
            xAxis3D: {
                type: "category",
                data: platforms.map((p) => p.charAt(0).toUpperCase() + p.slice(1)),
                axisLabel: { color: "#8b949e" },
                axisLine: { lineStyle: { color: "#30363d" } },
            },
            yAxis3D: {
                type: "category",
                data: dates.map((d) => {
                    const date = new Date(d);
                    return `${date.getMonth() + 1}/${date.getDate()}`;
                }),
                axisLabel: { color: "#8b949e" },
                axisLine: { lineStyle: { color: "#30363d" } },
            },
            zAxis3D: {
                type: "value",
                name: "Reach",
                nameTextStyle: { color: "#8b949e" },
                axisLabel: {
                    color: "#8b949e",
                    formatter: (value: number) => {
                        if (value >= 1000000) return (value / 1000000).toFixed(1) + "M";
                        if (value >= 1000) return (value / 1000).toFixed(0) + "K";
                        return value.toString();
                    },
                },
                axisLine: { lineStyle: { color: "#30363d" } },
            },
            grid3D: {
                boxWidth: 160,
                boxHeight: 80,
                boxDepth: 100,
                viewControl: {
                    projection: "perspective",
                    autoRotate: false,
                    distance: 280,
                    alpha: 25,
                    beta: 35,
                },
                light: {
                    main: {
                        intensity: 1.2,
                        shadow: true,
                    },
                    ambient: {
                        intensity: 0.3,
                    },
                },
                environment: "none",
            },
            series: [
                {
                    type: "bar3D",
                    data: chartData,
                    shading: "realistic",
                    emphasis: {
                        itemStyle: {
                            color: "#00d4ff",
                        },
                    },
                    itemStyle: {
                        opacity: 0.9,
                    },
                    bevelSize: 0.15,
                    bevelSmoothness: 2,
                },
            ],
        };

        chartInstance.current.setOption(option);

        // Handle resize
        const handleResize = () => {
            chartInstance.current?.resize();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [data, title]);

    return (
        <div
            ref={chartRef}
            className="h-full w-full"
            style={{ minHeight: "400px" }}
        />
    );
}
