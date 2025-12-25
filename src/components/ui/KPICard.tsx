// KPI Card Component
interface KPICardProps {
    title: string;
    value: string | number;
    change?: number;
    icon?: React.ReactNode;
    loading?: boolean;
}

export default function KPICard({ title, value, change, icon, loading }: KPICardProps) {
    if (loading) {
        return (
            <div className="card p-4">
                <div className="skeleton h-4 w-20 rounded mb-3" />
                <div className="skeleton h-8 w-24 rounded mb-2" />
                <div className="skeleton h-3 w-16 rounded" />
            </div>
        );
    }

    const isPositive = change && change > 0;
    const isNegative = change && change < 0;

    return (
        <div className="card p-4 transition-all hover:border-accent-primary/30">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-foreground-muted">{title}</p>
                    <p className="mt-1 text-2xl font-bold text-foreground">{value}</p>
                    {change !== undefined && (
                        <div className="mt-1 flex items-center gap-1">
                            <span
                                className={`text-sm font-medium ${isPositive
                                        ? "text-accent-success"
                                        : isNegative
                                            ? "text-accent-error"
                                            : "text-foreground-muted"
                                    }`}
                            >
                                {isPositive && "+"}
                                {change.toFixed(1)}%
                            </span>
                            <span className="text-xs text-foreground-subtle">vs last period</span>
                        </div>
                    )}
                </div>
                {icon && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-streamlyte text-white">
                        {icon}
                    </div>
                )}
            </div>
        </div>
    );
}
