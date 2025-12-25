// Streamlyte - Seed Script
// Generates mock data for development

import { PrismaClient, Platform, ContentType, MetricType, Period, GoalStatus, TaskStatus, TaskPriority, IdeaStatus, CampaignStatus, AccountStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

// Helper functions
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min: number, max: number, decimals: number = 2): number {
  return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
}

function randomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function subtractDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}

const platforms: Platform[] = ['instagram', 'linkedin', 'youtube', 'twitter'];
const contentTypes: ContentType[] = ['post', 'reel', 'short', 'story', 'video', 'tweet'];
const niches = ['fitness', 'tech', 'lifestyle', 'gaming', 'travel', 'food', 'fashion', 'business'];

// Sample data
const users = [
  { name: 'Alex Rivera', email: 'alex@streamlyte.com', niche: 'fitness', primaryPlatform: 'instagram' },
  { name: 'Sarah Chen', email: 'sarah@streamlyte.com', niche: 'tech', primaryPlatform: 'youtube' },
  { name: 'Marcus Johnson', email: 'marcus@streamlyte.com', niche: 'lifestyle', primaryPlatform: 'twitter' },
];

const socialAccountsData = [
  // Alex's accounts
  { platform: 'instagram' as Platform, handle: '@alexrivera_fit', userId: 0 },
  { platform: 'youtube' as Platform, handle: 'AlexRiveraFitness', userId: 0 },
  { platform: 'twitter' as Platform, handle: '@alexrivera', userId: 0 },
  // Sarah's accounts
  { platform: 'youtube' as Platform, handle: 'TechWithSarah', userId: 1 },
  { platform: 'linkedin' as Platform, handle: 'sarahchen', userId: 1 },
  { platform: 'instagram' as Platform, handle: '@sarahchentech', userId: 1 },
  { platform: 'twitter' as Platform, handle: '@sarahchen', userId: 1 },
  // Marcus's accounts
  { platform: 'twitter' as Platform, handle: '@marcusjohnson', userId: 2 },
  { platform: 'instagram' as Platform, handle: '@marcus_lifestyle', userId: 2 },
  { platform: 'linkedin' as Platform, handle: 'marcusjohnson', userId: 2 },
];

const contentTitles = {
  fitness: [
    '5 Morning Workout Hacks',
    'Full Body HIIT in 20 Minutes',
    'My Protein Shake Recipe',
    'Leg Day Motivation',
    'How I Lost 30 Pounds',
  ],
  tech: [
    'New iPhone Review',
    'Best Coding Tips for 2025',
    'AI Tools That Changed My Life',
    'Building My Dream Setup',
    'React vs Next.js Breakdown',
  ],
  lifestyle: [
    'Morning Routine for Success',
    'Minimalist Living Tips',
    'My Travel Essentials',
    'Work From Home Setup Tour',
    'Day in My Life',
  ],
};

const hashtags = {
  fitness: ['#fitness', '#workout', '#gym', '#motivation', '#health', '#fitfam'],
  tech: ['#tech', '#coding', '#developer', '#programming', '#ai', '#innovation'],
  lifestyle: ['#lifestyle', '#minimalism', '#productivity', '#dailyroutine', '#life'],
};

async function main() {
  console.log('🌱 Starting seed...');

  // Clear existing data
  await prisma.metricSnapshot.deleteMany();
  await prisma.contentItem.deleteMany();
  await prisma.task.deleteMany();
  await prisma.goal.deleteMany();
  await prisma.contentIdea.deleteMany();
  await prisma.campaign.deleteMany();
  await prisma.competitorProfile.deleteMany();
  await prisma.socialAccount.deleteMany();
  await prisma.session.deleteMany();
  await prisma.user.deleteMany();

  console.log('🧹 Cleared existing data');

  // Create users
  const passwordHash = await bcrypt.hash('password123', 10);
  const createdUsers = await Promise.all(
    users.map((user) =>
      prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          passwordHash,
          niche: user.niche,
          primaryPlatform: user.primaryPlatform,
          timezone: 'America/New_York',
          streakCount: randomInt(1, 30),
        },
      })
    )
  );

  console.log(`👤 Created ${createdUsers.length} users`);

  // Create social accounts
  const createdAccounts: Array<{ id: string; platform: Platform; userId: string }> = [];
  for (const accountData of socialAccountsData) {
    const user = createdUsers[accountData.userId];
    const account = await prisma.socialAccount.create({
      data: {
        userId: user.id,
        platform: accountData.platform,
        handle: accountData.handle,
        displayName: user.name,
        status: 'active',
        autoSync: true,
        lastSyncedAt: new Date(),
      },
    });
    createdAccounts.push({ id: account.id, platform: account.platform, userId: user.id });
  }

  console.log(`🔗 Created ${createdAccounts.length} social accounts`);

  // Create metric snapshots for last 30 days
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let snapshotCount = 0;
  for (const account of createdAccounts) {
    let baseFollowers = randomInt(5000, 100000);
    
    for (let i = 30; i >= 0; i--) {
      const date = subtractDays(today, i);
      baseFollowers += randomInt(-50, 200); // Simulate follower growth
      
      const reach = randomInt(1000, 50000);
      const impressions = reach + randomInt(500, 5000);
      const likes = randomInt(100, reach * 0.1);
      const comments = randomInt(10, likes * 0.2);
      const shares = randomInt(5, likes * 0.1);
      const saves = randomInt(10, likes * 0.15);
      const views = account.platform === 'youtube' ? randomInt(1000, 100000) : randomInt(500, reach);
      const clicks = randomInt(10, reach * 0.05);
      const engagementRate = randomFloat(1, 8);

      await prisma.metricSnapshot.create({
        data: {
          userId: account.userId,
          socialAccountId: account.id,
          date,
          reach,
          impressions,
          likes,
          comments,
          shares,
          saves,
          followers: baseFollowers,
          views,
          clicks,
          engagementRate,
        },
      });
      snapshotCount++;
    }
  }

  console.log(`📊 Created ${snapshotCount} metric snapshots`);

  // Create content items
  let contentCount = 0;
  for (const account of createdAccounts) {
    const user = createdUsers.find(u => u.id === account.userId)!;
    const niche = user.niche as keyof typeof contentTitles;
    const titles = contentTitles[niche] || contentTitles.lifestyle;
    
    for (let i = 0; i < 5; i++) {
      const publishedAt = subtractDays(today, randomInt(0, 25));
      const contentType = account.platform === 'youtube' ? 'video' : 
                          account.platform === 'twitter' ? 'tweet' :
                          contentTypes[randomInt(0, 3)];
      
      await prisma.contentItem.create({
        data: {
          socialAccountId: account.id,
          platformPostId: `post_${account.id}_${i}`,
          title: titles[i % titles.length],
          type: contentType,
          publishedAt,
          url: `https://${account.platform}.com/p/${randomInt(100000, 999999)}`,
          thumbnail: `https://picsum.photos/seed/${randomInt(1, 1000)}/400/400`,
          reach: randomInt(1000, 50000),
          impressions: randomInt(1500, 60000),
          likes: randomInt(100, 5000),
          comments: randomInt(10, 500),
          shares: randomInt(5, 200),
          saves: randomInt(10, 300),
          views: randomInt(500, 100000),
          engagementRate: randomFloat(2, 10),
        },
      });
      contentCount++;
    }
  }

  console.log(`📝 Created ${contentCount} content items`);

  // Create goals for each user
  let goalCount = 0;
  for (const user of createdUsers) {
    const goals = [
      { metricType: 'reach' as MetricType, targetValue: 50000, period: 'daily' as Period },
      { metricType: 'followers' as MetricType, targetValue: 1000, period: 'weekly' as Period },
      { metricType: 'posts' as MetricType, targetValue: 3, period: 'daily' as Period },
      { metricType: 'engagement' as MetricType, targetValue: 5, period: 'weekly' as Period },
    ];

    for (const goal of goals) {
      const progress = randomFloat(0.3, 1.2);
      await prisma.goal.create({
        data: {
          userId: user.id,
          metricType: goal.metricType,
          targetValue: goal.targetValue,
          currentValue: goal.targetValue * progress,
          period: goal.period,
          startDate: subtractDays(today, 7),
          endDate: today,
          status: progress >= 1 ? 'completed' : 'active',
        },
      });
      goalCount++;
    }
  }

  console.log(`🎯 Created ${goalCount} goals`);

  // Create tasks for each user
  let taskCount = 0;
  const taskTitles = [
    'Post morning content',
    'Engage with followers',
    'Research trending topics',
    'Reply to DMs',
    'Plan next week content',
    'Update profile bio',
    'Analyze competitor content',
    'Create story highlights',
  ];

  for (const user of createdUsers) {
    for (let i = 0; i < 8; i++) {
      const dueDate = subtractDays(today, randomInt(-5, 3));
      const status = dueDate < today && Math.random() > 0.3 ? 'done' : 
                     dueDate.toDateString() === today.toDateString() ? 'in_progress' : 'todo';
      
      await prisma.task.create({
        data: {
          userId: user.id,
          title: taskTitles[i],
          description: `Task description for ${taskTitles[i]}`,
          dueDate,
          status: status as TaskStatus,
          priority: ['low', 'medium', 'high', 'urgent'][randomInt(0, 3)] as TaskPriority,
          completedAt: status === 'done' ? dueDate : null,
        },
      });
      taskCount++;
    }
  }

  console.log(`✅ Created ${taskCount} tasks`);

  // Create content ideas
  let ideaCount = 0;
  const ideaTopics = [
    'Behind the scenes of my morning routine',
    '5 tips for better productivity',
    'Q&A with followers',
    'Reacting to viral content',
    'My honest review of trending product',
  ];

  for (const user of createdUsers) {
    const niche = user.niche as keyof typeof hashtags;
    for (let i = 0; i < 5; i++) {
      await prisma.contentIdea.create({
        data: {
          userId: user.id,
          platform: platforms[randomInt(0, 3)],
          topic: ideaTopics[i],
          suggestedCaption: `Here's my take on ${ideaTopics[i].toLowerCase()}... What do you think? Drop a comment below! 👇`,
          suggestedHashtags: JSON.stringify(hashtags[niche] || hashtags.lifestyle),
          confidenceScore: randomFloat(0.6, 0.95),
          status: ['suggested', 'saved', 'used'][randomInt(0, 2)] as IdeaStatus,
        },
      });
      ideaCount++;
    }
  }

  console.log(`💡 Created ${ideaCount} content ideas`);

  // Create campaigns
  let campaignCount = 0;
  const brands = [
    { name: 'FitGear Pro', logo: '🏋️' },
    { name: 'TechNova', logo: '💻' },
    { name: 'StyleVibe', logo: '👗' },
    { name: 'GreenLife', logo: '🌿' },
  ];

  for (const user of createdUsers) {
    for (let i = 0; i < 2; i++) {
      const brand = brands[randomInt(0, brands.length - 1)];
      const startDate = subtractDays(today, randomInt(10, 30));
      
      await prisma.campaign.create({
        data: {
          userId: user.id,
          brandName: brand.name,
          brandLogo: brand.logo,
          startDate,
          endDate: subtractDays(today, randomInt(-10, 5)),
          deliverables: JSON.stringify(['1 Reel', '2 Stories', '1 Post']),
          agreedAmount: randomInt(500, 5000),
          expectedReach: randomInt(10000, 100000),
          actualReach: randomInt(8000, 120000),
          status: ['active', 'completed'][randomInt(0, 1)] as CampaignStatus,
          notes: `Partnership with ${brand.name} for product promotion`,
        },
      });
      campaignCount++;
    }
  }

  console.log(`🤝 Created ${campaignCount} campaigns`);

  // Create competitor profiles
  let competitorCount = 0;
  const competitors = [
    { handle: '@fitness_guru', platform: 'instagram' as Platform },
    { handle: '@tech_master', platform: 'youtube' as Platform },
    { handle: '@lifestyle_queen', platform: 'twitter' as Platform },
  ];

  for (const user of createdUsers) {
    for (const competitor of competitors) {
      await prisma.competitorProfile.create({
        data: {
          userId: user.id,
          platform: competitor.platform,
          handle: competitor.handle,
          displayName: competitor.handle.replace('@', '').replace('_', ' '),
          notes: 'Key competitor to watch',
          lastSyncedAt: today,
          summaryStatsJson: {
            followers: randomInt(50000, 500000),
            avgEngagement: randomFloat(2, 8),
            postsPerWeek: randomInt(5, 20),
          },
        },
      });
      competitorCount++;
    }
  }

  console.log(`🔍 Created ${competitorCount} competitor profiles`);

  console.log('✨ Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
