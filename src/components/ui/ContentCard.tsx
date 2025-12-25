// Top Performing Content Card
interface ContentCardProps {
    content: {
        id: string;
        title?: string;
        type: string;
        thumbnail?: string;
        reach: number;
        likes: number;
        engagementRate: number;
        publishedAt: Date | string;
        socialAccount: {
            platform: string;
            handle: string;
        };
    };
}

const platformColors: Record<string, string> = {
    instagram: "bg-pink-500",
    youtube: "bg-red-500",
    linkedin: "bg-blue-500",
    twitter: "bg-sky-400",
};

export default function ContentCard({ content }: ContentCardProps) {
    const formatNumber = (num: number) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000).toFixed(1) + "K";
        return num.toString();
    };

    const formatDate = (date: Date | string) => {
        const d = new Date(date);
        return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    };

    return (
        <div className="flex items-center gap-3 rounded-lg border border-border bg-background-secondary p-3 transition-all hover:border-accent-primary/30">
            {/* Thumbnail */}
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-background-tertiary">
                {content.thumbnail ? (
                    <img
                        src={content.thumbnail}
                        alt={content.title || "Content"}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-2xl">
                        📸
                    </div>
                )}
                <div
                    className={`absolute bottom-1 right-1 h-3 w-3 rounded-full ${platformColors[content.socialAccount.platform] || "bg-gray-500"
                        }`}
                />
            </div>

            {/* Content Info */}
            <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-foreground">
                    {content.title || `${content.type} post`}
                </p>
                <p className="text-xs text-foreground-muted">
                    {content.socialAccount.handle} · {formatDate(content.publishedAt)}
                </p>
            </div>

            {/* Metrics */}
            <div className="flex flex-shrink-0 flex-col items-end gap-1">
                <span className="text-sm font-medium text-accent-primary">
                    {formatNumber(content.reach)} reach
                </span>
                <span className="text-xs text-foreground-muted">
                    {content.engagementRate.toFixed(1)}% eng
                </span>
            </div>
        </div>
    );
}
