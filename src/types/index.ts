// Type definitions for Streamlyte

// Platform types
export type Platform = 'instagram' | 'linkedin' | 'youtube' | 'twitter';
export type ContentType = 'post' | 'reel' | 'short' | 'story' | 'article' | 'video' | 'tweet';
export type MetricType = 'reach' | 'followers' | 'posts' | 'engagement' | 'views' | 'revenue' | 'impressions';
export type Period = 'daily' | 'weekly' | 'monthly' | 'quarterly';
export type GoalStatus = 'active' | 'completed' | 'failed' | 'paused';
export type TaskStatus = 'todo' | 'in_progress' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';
export type AccountStatus = 'active' | 'disconnected' | 'expired' | 'error';
export type CampaignStatus = 'draft' | 'negotiating' | 'active' | 'completed' | 'cancelled';
export type IdeaStatus = 'suggested' | 'saved' | 'used' | 'dismissed';

// User
export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    timezone: string;
    niche?: string;
    primaryPlatform?: string;
    streakCount: number;
    createdAt: Date;
}

// Social Account
export interface SocialAccount {
    id: string;
    userId: string;
    platform: Platform;
    handle: string;
    displayName?: string;
    profileUrl?: string;
    status: AccountStatus;
    autoSync: boolean;
    lastSyncedAt?: Date;
    createdAt: Date;
}

// Metric Snapshot
export interface MetricSnapshot {
    id: string;
    userId: string;
    socialAccountId: string;
    date: Date;
    reach: number;
    impressions: number;
    likes: number;
    comments: number;
    shares: number;
    saves: number;
    followers: number;
    views: number;
    clicks: number;
    engagementRate: number;
}

// Content Item
export interface ContentItem {
    id: string;
    socialAccountId: string;
    platformPostId: string;
    title?: string;
    type: ContentType;
    caption?: string;
    publishedAt: Date;
    url?: string;
    thumbnail?: string;
    reach: number;
    impressions: number;
    likes: number;
    comments: number;
    shares: number;
    saves: number;
    views: number;
    clicks: number;
    engagementRate: number;
}

// Goal
export interface Goal {
    id: string;
    userId: string;
    metricType: MetricType;
    targetValue: number;
    currentValue: number;
    period: Period;
    startDate: Date;
    endDate: Date;
    status: GoalStatus;
}

// Task
export interface Task {
    id: string;
    userId: string;
    goalId?: string;
    title: string;
    description?: string;
    dueDate?: Date;
    status: TaskStatus;
    priority: TaskPriority;
    completedAt?: Date;
}

// Content Idea
export interface ContentIdea {
    id: string;
    userId: string;
    platform?: Platform;
    topic: string;
    suggestedCaption?: string;
    suggestedHashtags?: string;
    confidenceScore: number;
    status: IdeaStatus;
}

// Campaign
export interface Campaign {
    id: string;
    userId: string;
    brandName: string;
    brandLogo?: string;
    startDate?: Date;
    endDate?: Date;
    deliverables?: string;
    agreedAmount?: number;
    expectedReach?: number;
    actualReach?: number;
    status: CampaignStatus;
    notes?: string;
}

// Competitor Profile
export interface CompetitorProfile {
    id: string;
    userId: string;
    platform: Platform;
    handle: string;
    displayName?: string;
    notes?: string;
    lastSyncedAt?: Date;
    summaryStatsJson?: {
        followers?: number;
        avgEngagement?: number;
        postsPerWeek?: number;
    };
}

// Dashboard Types
export interface DashboardKPIs {
    todayReach: number;
    reachChange: number;
    totalFollowers: number;
    followersChange: number;
    postsLast7Days: number;
    postsChange: number;
    avgEngagement: number;
    engagementChange: number;
}

export interface PlatformMetrics {
    platform: Platform;
    reach: number;
    impressions: number;
    followers: number;
    engagementRate: number;
}

export interface TimeSeriesData {
    date: string;
    reach: number;
    impressions: number;
    engagement: number;
    followers: number;
}

export interface PostingTimeData {
    hour: number;
    dayOfWeek: number;
    engagement: number;
    postCount: number;
}

// API Response Types
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    hasMore: boolean;
}

// Filter Types
export interface DateRange {
    startDate: Date;
    endDate: Date;
}

export interface ContentFilters {
    platform?: Platform;
    type?: ContentType;
    dateRange?: DateRange;
    sortBy?: 'date' | 'reach' | 'engagement' | 'likes';
    sortOrder?: 'asc' | 'desc';
}

// Chart Data Types
export interface ChartDataPoint {
    name: string;
    value: number;
    [key: string]: string | number;
}

export interface Chart3DDataPoint {
    x: number | string;
    y: number | string;
    z: number;
    value?: number;
    name?: string;
}
