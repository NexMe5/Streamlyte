"use client";

import React, { useEffect, useState, useRef } from "react";
import ReactECharts from "echarts-for-react";

interface RaceData {
    date: string;
    [key: string]: string | number;
}

interface BarRaceChartProps {
    data: RaceData[];
}

export default function BarRaceChart({ data }: BarRaceChartProps) {
    const [option, setOption] = useState<any>({});
    const chartRef = useRef<any>(null);
    const timelineRef = useRef<number>(0);

    const platforms = ["instagram", "youtube", "twitter", "linkedin"];
    const platformColors: Record<string, string> = {
        instagram: "#E1306C",
        youtube: "#FF0000",
        twitter: "#1DA1F2",
        linkedin: "#0A66C2",
    };

    useEffect(() => {
        if (!data || data.length === 0) return;

        // Initial setup
        const initialDate = data[0].date;
        const initialValues = platforms.map(p => ({
            name: p,
            value: data[0][p] as number
        })).sort((a, b) => a.value - b.value);

        const initialOption = {
            baseOption: {
                timeline: {
                    axisType: 'category',
                    orient: 'horizontal', // horizontal timeline at bottom
                    autoPlay: true,
                    inverse: false,
                    playInterval: 1000,
                    left: '10%',
                    right: '10%',
                    bottom: 0, // Position at very bottom
                    width: '80%',
                    label: {
                        color: '#999',
                    },
                    symbol: 'none',
                    lineStyle: {
                        color: '#555'
                    },
                    checkpointStyle: {
                        color: '#bbb',
                        borderColor: '#777',
                        borderWidth: 2
                    },
                    controlStyle: {
                        showNextBtn: false,
                        showPrevBtn: false,
                        color: '#666',
                        borderColor: '#666'
                    },
                    data: data.map(d => d.date)
                },
                title: {
                    text: 'Platform Reach Growth',
                    subtext: 'Monthly Progress',
                    left: 'center',
                    textStyle: {
                        color: '#fff',
                        fontSize: 20
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '15%', // Give space for timeline
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    name: 'Reach',
                    axisLabel: {
                        formatter: '{value}',
                        color: '#9CA3AF'
                    },
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'category',
                    inverse: true,
                    axisLabel: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 14
                    },
                    splitLine: {
                        show: false
                    },
                    animationDuration: 300,
                    animationDurationUpdate: 300
                },
                series: [
                    {
                        realtimeSort: true,
                        seriesLayoutBy: 'column',
                        type: 'bar',
                        itemStyle: {
                            color: function (param: any) {
                                return platformColors[param.name] || '#5470c6';
                            },
                            borderRadius: [0, 4, 4, 0] // Rounded edges
                        },
                        encode: {
                            x: 'value',
                            y: 'name'
                        },
                        label: {
                            show: true,
                            position: 'right',
                            valueAnimation: true,
                            color: '#fff',
                            fontWeight: 'bold'
                        }
                    }
                ],
                animationDurationUpdate: 1000,
                animationEasing: 'linear',
                animationEasingUpdate: 'linear',
                graphic: {
                    elements: [
                        {
                            type: 'text',
                            right: 50,
                            bottom: 60,
                            style: {
                                text: initialDate,
                                font: 'bolder 60px monospace',
                                fill: 'rgba(255, 255, 255, 0.25)'
                            },
                            z: 100
                        }
                    ]
                }
            },
            options: data.map(d => ({
                title: { text: `Reach by Platform - ${d.date}` },
                graphic: {
                    elements: [
                        {
                            type: 'text',
                            right: 50,
                            bottom: 60,
                            style: {
                                text: d.date,
                                font: 'bolder 60px monospace',
                                fill: 'rgba(255, 255, 255, 0.25)'
                            }
                        }
                    ]
                },
                series: [
                    {
                        data: platforms.map(p => ({
                            name: p,
                            value: d[p]
                        }))
                    }
                ]
            }))
        };

        setOption(initialOption);

    }, [data]);

    return (
        <ReactECharts
            option={option}
            style={{ height: "400px", width: "100%" }}
            opts={{ renderer: 'canvas' }}
        />
    );
}
