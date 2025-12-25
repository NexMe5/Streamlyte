// 3D Line Chart Component using ECharts GL
"use client";

import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "echarts-gl";

interface Line3DChartProps {
    data: Array<{
        date: string;
        reach: number;
        impressions: number;
        engagement: number;
    }>;
    title?: string;
}

export default function Line3DChart({ data, title }: Line3DChartProps) {
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<echarts.ECharts | null>(null);

    useEffect(() => {
        if (!chartRef.current || data.length === 0) return;

        // Initialize chart
        if (!chartInstance.current) {
            chartInstance.current = echarts.init(chartRef.current);
        }

        // Prepare data for 3D surface
        const dates = data.map((d) => d.date);
        const metrics = ["Reach", "Impressions", "Engagement"];

        // Create surface data
        const surfaceData: number[][] = [];
        data.forEach((item, dateIndex) => {
            surfaceData.push([dateIndex, 0, item.reach / 1000]); // Reach
            surfaceData.push([dateIndex, 1, item.impressions / 1000]); // Impressions
            surfaceData.push([dateIndex, 2, item.engagement * 1000]); // Engagement scaled
        });

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
                    const date = dates[Math.floor(params.value[0])];
                    const metricIndex = Math.floor(params.value[1]);
                    const metric = metrics[metricIndex];
                    let value = params.value[2];

                    if (metricIndex === 2) {
                        value = value / 1000; // De-scale engagement
                        return `<div style="padding: 8px;">
              <div style="color: #8b949e;">${date}</div>
              <div style="color: #00d4ff; font-weight: 600;">${metric}: ${value.toFixed(1)}%</div>
            </div>`;
                    }

                    return `<div style="padding: 8px;">
            <div style="color: #8b949e;">${date}</div>
            <div style="color: #00d4ff; font-weight: 600;">${metric}: ${(value * 1000).toLocaleString()}</div>
          </div>`;
                },
            },
            visualMap: {
                show: false,
                dimension: 2,
                min: 0,
                max: Math.max(...surfaceData.map((d) => d[2])),
                inRange: {
                    color: ["#00a8cc", "#00d4ff", "#a855f7", "#7c3aed"],
                },
            },
            xAxis3D: {
                type: "category",
                data: dates.map((d) => {
                    const date = new Date(d);
                    return `${date.getMonth() + 1}/${date.getDate()}`;
                }),
                axisLabel: {
                    color: "#8b949e",
                    interval: Math.floor(dates.length / 7),
                },
                axisLine: { lineStyle: { color: "#30363d" } },
            },
            yAxis3D: {
                type: "category",
                data: metrics,
                axisLabel: { color: "#8b949e" },
                axisLine: { lineStyle: { color: "#30363d" } },
            },
            zAxis3D: {
                type: "value",
                name: "Value (K)",
                nameTextStyle: { color: "#8b949e" },
                axisLabel: { color: "#8b949e" },
                axisLine: { lineStyle: { color: "#30363d" } },
            },
            grid3D: {
                boxWidth: 180,
                boxHeight: 80,
                boxDepth: 80,
                viewControl: {
                    projection: "perspective",
                    autoRotate: false,
                    distance: 250,
                    alpha: 20,
                    beta: 40,
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
            },
            series: [
                {
                    type: "scatter3D",
                    data: surfaceData,
                    symbolSize: 8,
                    itemStyle: {
                        opacity: 0.9,
                    },
                    emphasis: {
                        itemStyle: {
                            color: "#00d4ff",
                        },
                    },
                },
                {
                    type: "line3D",
                    data: data.map((item, i) => [i, 0, item.reach / 1000]),
                    lineStyle: {
                        width: 4,
                        color: "#00d4ff",
                    },
                },
                {
                    type: "line3D",
                    data: data.map((item, i) => [i, 1, item.impressions / 1000]),
                    lineStyle: {
                        width: 4,
                        color: "#a855f7",
                    },
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
