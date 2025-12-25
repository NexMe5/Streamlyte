# Streamlyte - Influencer Analytics Dashboard

A comprehensive analytics and content management platform for influencers and content creators, built with Next.js 14, TypeScript, and 3D visualizations.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4 with custom Streamlyte theme (cyan/purple gradient)
- **Charts**: Apache ECharts with 3D support (echarts-gl)
- **Database**: MySQL via Prisma ORM
- **Authentication**: NextAuth.js with credentials provider
- **State Management**: Zustand, React Hot Toast

## Quick Start

### Prerequisites

- Node.js 18+
- MySQL database
- npm or yarn

### Installation

1. **Clone and install dependencies**
   ```bash
   cd streamlyte-app
   npm install
   ```

2. **Configure environment variables**
   
   Create a `.env` file with:
   ```env
   DATABASE_URL="mysql://user:password@localhost:3306/streamlyte"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

3. **Set up the database**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   
   # Seed with mock data
   npm run db:seed
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000)

### Default Login Credentials

After seeding, use:
- Email: `alex@streamlyte.com`
- Password: `password123`

## Project Structure

```
src/
├── app/
│   ├── (auth)/           # Login, signup pages
│   ├── (dashboard)/      # Main app pages
│   │   ├── accounts/     # Social accounts management
│   │   ├── campaigns/    # Brand partnerships
│   │   ├── content/      # Content analytics
│   │   └── goals/        # Goals & tasks
│   └── api/              # API routes
├── components/
│   ├── charts/           # ECharts 3D components
│   ├── layout/           # Sidebar, TopBar
│   ├── providers/        # Session, Toast
│   └── ui/               # Reusable UI components
├── lib/                  # Prisma, auth, utils
├── types/                # TypeScript definitions
└── prisma/               # Schema and seed
```

## Features

### Dashboard
- Real-time KPI tracking (reach, followers, engagement)
- 3D bar chart for platform comparison
- 3D line chart for metrics over time
- Goal progress visualization
- Top performing content

### Connected Accounts
- Support for Instagram, YouTube, LinkedIn, Twitter/X
- Manual sync trigger
- Auto-sync toggle
- OAuth flow (stubbed for development)

### Goals & Tasks
- Create and track metric goals
- Task management with priorities
- Streak tracking

### Content Analytics
- Performance table with filtering
- Sort by reach, engagement, or date
- Platform-wise breakdown

### Campaigns
- Track brand partnerships
- Revenue and reach analytics
- Campaign status management

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `POST /api/auth/signup` | User registration |
| `GET /api/accounts` | List connected accounts |
| `POST /api/accounts/[id]/sync` | Trigger account sync |
| `GET /api/metrics/overview` | Dashboard KPIs |
| `GET /api/metrics/trends` | Time-series data |
| `GET /api/goals` | List goals |
| `GET /api/tasks` | List tasks |
| `GET /api/content` | List content |
| `GET /api/campaigns` | List campaigns |
| `POST /api/ai/ideas` | Generate content ideas |
| `POST /api/ai/hashtags` | Hashtag recommendations |

## Extending Integrations

### Adding a New Platform

1. Add to `Platform` enum in `prisma/schema.prisma`
2. Create connector in `src/services/social/[platform].ts`
3. Implement OAuth flow and data fetching
4. Add to `platformInfo` in account components

### Integrating Real AI

Replace mock services in:
- `src/app/api/ai/ideas/route.ts`
- `src/app/api/ai/hashtags/route.ts`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:push` | Push schema to DB |
| `npm run db:seed` | Seed mock data |
| `npm run db:studio` | Open Prisma Studio |

## Color Theme

Based on the Streamlyte logo:
- **Navy**: `#0d1117` (background)
- **Cyan**: `#00d4ff` (primary accent)
- **Purple**: `#a855f7` (secondary accent)
- **Gradient**: Cyan → Purple

## License

MIT
