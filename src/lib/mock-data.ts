
export const mockUser = {
    id: "user-1",
    name: "Alex Streamlyte",
    email: "alex@streamlyte.com",
    image: null,
};

export const mockSocialAccounts = [
    { id: "1", platform: "instagram", handle: "@alex_streamlyte", status: "active" },
    { id: "2", platform: "youtube", handle: "Alex Creater", status: "active" },
    { id: "3", platform: "twitter", handle: "@alex_tweets", status: "disconnected" },
];

export const mockOverview = {
    reach: 125000,
    reachChange: 12,
    followers: 45200,
    followersChange: 5,
    posts: 128,
    postsChange: 8,
    engagement: 4.8,
    engagementChange: -2,
};

export const mockTrends = Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    reach: Math.floor(Math.random() * 5000) + 1000,
    impressions: Math.floor(Math.random() * 8000) + 2000,
    engagement: Math.random() * 5 + 1,
}));

export const mockPlatformMetrics = [
    { platform: "instagram", reach: 45000, engagement: 4.5, followers: 20000 },
    { platform: "youtube", reach: 35000, engagement: 6.2, followers: 15000 },
    { platform: "twitter", reach: 15000, engagement: 2.1, followers: 8000 },
    { platform: "linkedin", reach: 30000, engagement: 3.8, followers: 2200 },
];

export const mockGoals = [
    {
        id: "1",
        metricType: "followers",
        targetValue: 50000,
        currentValue: 45200,
        period: "monthly",
        status: "active",
        title: "Reach 50k Followers",
    },
    {
        id: "2",
        metricType: "engagement",
        targetValue: 6.0,
        currentValue: 4.8,
        period: "weekly",
        status: "active",
        title: "Boost Engagement",
    },
];

export const mockTasks = [
    { id: "1", title: "Post daily reel", status: "todo", priority: "high", dueDate: new Date().toISOString() },
    { id: "2", title: "Reply to comments", status: "done", priority: "medium", dueDate: new Date().toISOString() },
    { id: "3", title: "Update bio link", status: "in_progress", priority: "low", dueDate: new Date().toISOString() },
];

export const mockContent = [
    {
        id: "1",
        title: "Summer Vibes Reel",
        type: "reel",
        platform: "instagram",
        reach: 12000,
        likes: 4500,
        comments: 120,
        engagementRate: 8.5,
        publishedAt: new Date().toISOString(),
        thumbnail: null,
        socialAccount: { platform: "instagram", handle: "@alex_streamlyte" },
    },
    {
        id: "2",
        title: "Tech Review 2024",
        type: "video",
        platform: "youtube",
        reach: 45000,
        likes: 3200,
        comments: 850,
        engagementRate: 6.2,
        publishedAt: new Date(Date.now() - 86400000).toISOString(),
        thumbnail: null,
        socialAccount: { platform: "youtube", handle: "Alex Creater" },
    },
];

export const mockCampaigns = [
    {
        id: "1",
        brandName: "TechGear",
        status: "active",
        agreedAmount: 5000,
        expectedReach: 100000,
        actualReach: 45000,
    },
    {
        id: "2",
        brandName: "DrinkUp",
        status: "completed",
        agreedAmount: 2000,
        expectedReach: 50000,
        actualReach: 55000,
    },
];
