// Utility functions for Streamlyte

import { clsx, type ClassValue } from "clsx";

// Class name utility (similar to tailwind-merge but simpler)
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}

// Format numbers with K, M suffixes
export function formatNumber(num: number): string {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
}

// Format percentage with sign
export function formatPercentage(value: number, showSign = true): string {
    const formatted = value.toFixed(1) + '%';
    if (showSign && value > 0) return '+' + formatted;
    return formatted;
}

// Format currency
export function formatCurrency(amount: number, currency = 'USD'): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

// Format date relative to now
export function formatRelativeDate(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
}

// Format date for display
export function formatDate(date: Date, format: 'short' | 'long' = 'short'): string {
    const options: Intl.DateTimeFormatOptions = format === 'long'
        ? { year: 'numeric', month: 'long', day: 'numeric' }
        : { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Calculate percentage change
export function calculateChange(current: number, previous: number): number {
    if (previous === 0) return current > 0 ? 100 : 0;
    return ((current - previous) / previous) * 100;
}

// Platform display names
export const platformNames: Record<string, string> = {
    instagram: 'Instagram',
    youtube: 'YouTube',
    linkedin: 'LinkedIn',
    twitter: 'Twitter/X',
};

// Platform colors for charts
export const platformColors: Record<string, string> = {
    instagram: '#E4405F',
    youtube: '#FF0000',
    linkedin: '#0077B5',
    twitter: '#1DA1F2',
};

// Metric type display names
export const metricTypeNames: Record<string, string> = {
    reach: 'Reach',
    followers: 'Followers',
    posts: 'Posts',
    engagement: 'Engagement Rate',
    views: 'Views',
    revenue: 'Revenue',
    impressions: 'Impressions',
};

// Period display names
export const periodNames: Record<string, string> = {
    daily: 'Daily',
    weekly: 'Weekly',
    monthly: 'Monthly',
    quarterly: 'Quarterly',
};

// Goal status colors
export const goalStatusColors: Record<string, string> = {
    active: '#00d4ff',
    completed: '#3fb950',
    failed: '#f85149',
    paused: '#d29922',
};

// Task status colors
export const taskStatusColors: Record<string, string> = {
    todo: '#8b949e',
    in_progress: '#00d4ff',
    done: '#3fb950',
};

// Generate date range
export function generateDateRange(startDate: Date, endDate: Date): Date[] {
    const dates: Date[] = [];
    const current = new Date(startDate);

    while (current <= endDate) {
        dates.push(new Date(current));
        current.setDate(current.getDate() + 1);
    }

    return dates;
}

// Sleep utility
export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Debounce function
export function debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null;

    return (...args: Parameters<T>) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}
