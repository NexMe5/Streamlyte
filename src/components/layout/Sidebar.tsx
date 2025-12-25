// Sidebar Navigation Component
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    HomeIcon,
    ChartBarIcon,
    CheckCircleIcon,
    LinkIcon,
    MegaphoneIcon,
    Cog6ToothIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline";

const navigation = [
    { name: "Dashboard", href: "/", icon: HomeIcon },
    { name: "Content & Trends", href: "/content", icon: ChartBarIcon },
    { name: "Goals & Tasks", href: "/goals", icon: CheckCircleIcon },
    { name: "Accounts", href: "/accounts", icon: LinkIcon },
    { name: "Campaigns", href: "/campaigns", icon: MegaphoneIcon },
    { name: "AI Assistant", href: "/ai", icon: SparklesIcon },
    { name: "Settings", href: "/settings", icon: Cog6ToothIcon },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-background-secondary">
            {/* Logo */}
            <div className="flex h-16 items-center gap-2 border-b border-border px-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-streamlyte">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5 text-white"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                </div>
                <span className="text-xl font-bold">
                    <span className="text-foreground">Stream</span>
                    <span className="text-gradient">lyte</span>
                </span>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-1 p-4">
                {navigation.map((item) => {
                    const isActive = pathname === item.href ||
                        (item.href !== "/" && pathname.startsWith(item.href));

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`
                flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all
                ${isActive
                                    ? "bg-gradient-streamlyte text-white shadow-md"
                                    : "text-foreground-muted hover:bg-background-tertiary hover:text-foreground"
                                }
              `}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            {/* Streak Badge */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-border p-4">
                <div className="card-gradient rounded-lg p-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-streamlyte">
                            <span className="text-lg">🔥</span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-foreground">5 Day Streak!</p>
                            <p className="text-xs text-foreground-muted">Keep it going</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
