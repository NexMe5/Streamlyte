// Top Navigation Bar Component
"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import {
    BellIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    CalendarIcon,
} from "@heroicons/react/24/outline";

const platforms = [
    { id: "all", name: "All Platforms" },
    { id: "instagram", name: "Instagram" },
    { id: "youtube", name: "YouTube" },
    { id: "linkedin", name: "LinkedIn" },
    { id: "twitter", name: "Twitter/X" },
];

const dateRanges = [
    { id: "7d", name: "Last 7 days" },
    { id: "14d", name: "Last 14 days" },
    { id: "30d", name: "Last 30 days" },
    { id: "90d", name: "Last 90 days" },
];

interface TopBarProps {
    selectedPlatform?: string;
    onPlatformChange?: (platform: string) => void;
    selectedDateRange?: string;
    onDateRangeChange?: (range: string) => void;
}

export default function TopBar({
    selectedPlatform = "all",
    onPlatformChange,
    selectedDateRange = "7d",
    onDateRangeChange,
}: TopBarProps) {
    const { data: session } = useSession();
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showPlatformMenu, setShowPlatformMenu] = useState(false);
    const [showDateMenu, setShowDateMenu] = useState(false);

    const selectedPlatformName = platforms.find(p => p.id === selectedPlatform)?.name || "All Platforms";
    const selectedDateRangeName = dateRanges.find(r => r.id === selectedDateRange)?.name || "Last 7 days";

    return (
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background-secondary/80 px-6 backdrop-blur-md">
            {/* Left: Search */}
            <div className="flex items-center gap-4">
                <div className="relative">
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-subtle" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="input w-64 pl-9"
                    />
                </div>
            </div>

            {/* Center: Filters */}
            <div className="flex items-center gap-3">
                {/* Platform Filter */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setShowPlatformMenu(!showPlatformMenu);
                            setShowDateMenu(false);
                        }}
                        className="btn btn-secondary flex items-center gap-2"
                    >
                        <span>{selectedPlatformName}</span>
                        <ChevronDownIcon className="h-4 w-4" />
                    </button>

                    {showPlatformMenu && (
                        <div className="absolute left-0 top-full z-50 mt-2 w-48 rounded-lg border border-border bg-background-secondary py-1 shadow-lg">
                            {platforms.map((platform) => (
                                <button
                                    key={platform.id}
                                    onClick={() => {
                                        onPlatformChange?.(platform.id);
                                        setShowPlatformMenu(false);
                                    }}
                                    className={`w-full px-4 py-2 text-left text-sm hover:bg-background-tertiary ${selectedPlatform === platform.id ? "text-accent-primary" : "text-foreground"
                                        }`}
                                >
                                    {platform.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Date Range Filter */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setShowDateMenu(!showDateMenu);
                            setShowPlatformMenu(false);
                        }}
                        className="btn btn-secondary flex items-center gap-2"
                    >
                        <CalendarIcon className="h-4 w-4" />
                        <span>{selectedDateRangeName}</span>
                        <ChevronDownIcon className="h-4 w-4" />
                    </button>

                    {showDateMenu && (
                        <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-lg border border-border bg-background-secondary py-1 shadow-lg">
                            {dateRanges.map((range) => (
                                <button
                                    key={range.id}
                                    onClick={() => {
                                        onDateRangeChange?.(range.id);
                                        setShowDateMenu(false);
                                    }}
                                    className={`w-full px-4 py-2 text-left text-sm hover:bg-background-tertiary ${selectedDateRange === range.id ? "text-accent-primary" : "text-foreground"
                                        }`}
                                >
                                    {range.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Right: User */}
            <div className="flex items-center gap-4">
                {/* Notifications */}
                <button className="relative rounded-lg p-2 text-foreground-muted hover:bg-background-tertiary hover:text-foreground">
                    <BellIcon className="h-5 w-5" />
                    <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent-error" />
                </button>

                {/* User Menu */}
                <div className="relative">
                    <button
                        onClick={() => setShowUserMenu(!showUserMenu)}
                        className="flex items-center gap-2 rounded-lg p-1 hover:bg-background-tertiary"
                    >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-streamlyte text-sm font-medium text-white">
                            {session?.user?.name?.charAt(0) || "U"}
                        </div>
                        <ChevronDownIcon className="h-4 w-4 text-foreground-muted" />
                    </button>

                    {showUserMenu && (
                        <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-lg border border-border bg-background-secondary py-1 shadow-lg">
                            <div className="border-b border-border px-4 py-2">
                                <p className="text-sm font-medium text-foreground">{session?.user?.name}</p>
                                <p className="text-xs text-foreground-muted">{session?.user?.email}</p>
                            </div>
                            <button
                                onClick={() => signOut({ callbackUrl: "/login" })}
                                className="w-full px-4 py-2 text-left text-sm text-foreground-muted hover:bg-background-tertiary hover:text-foreground"
                            >
                                Sign out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
