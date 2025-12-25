// Campaigns Page
"use client";

import { useState, useEffect } from "react";
import TopBar from "@/components/layout/TopBar";
import toast from "react-hot-toast";
import { PlusIcon } from "@heroicons/react/24/outline";

interface Campaign {
    id: string;
    brandName: string;
    brandLogo?: string;
    startDate?: string;
    endDate?: string;
    deliverables?: string;
    agreedAmount?: number;
    expectedReach?: number;
    actualReach?: number;
    status: string;
    notes?: string;
}

const statusColors: Record<string, string> = {
    draft: "bg-gray-500",
    negotiating: "bg-yellow-500",
    active: "bg-blue-500",
    completed: "bg-green-500",
    cancelled: "bg-red-500",
};

export default function CampaignsPage() {
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [newCampaign, setNewCampaign] = useState({
        brandName: "",
        agreedAmount: "",
        expectedReach: "",
        notes: "",
    });

    useEffect(() => {
        fetchCampaigns();
    }, []);

    const fetchCampaigns = async () => {
        try {
            const res = await fetch("/api/campaigns");
            const data = await res.json();
            if (data.success) {
                setCampaigns(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch campaigns:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async () => {
        if (!newCampaign.brandName.trim()) {
            toast.error("Brand name is required");
            return;
        }
        try {
            const res = await fetch("/api/campaigns", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newCampaign),
            });
            const data = await res.json();
            if (data.success) {
                toast.success("Campaign created!");
                setShowModal(false);
                setNewCampaign({ brandName: "", agreedAmount: "", expectedReach: "", notes: "" });
                fetchCampaigns();
            } else {
                toast.error(data.error || "Failed to create campaign");
            }
        } catch (error) {
            toast.error("Failed to create campaign");
        }
    };

    const formatCurrency = (amount?: number) => {
        if (!amount) return "-";
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const formatNumber = (num?: number) => {
        if (!num) return "-";
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000).toFixed(1) + "K";
        return num.toString();
    };

    const totalRevenue = campaigns
        .filter((c) => c.status === "completed")
        .reduce((sum, c) => sum + (c.agreedAmount || 0), 0);

    const activeCampaigns = campaigns.filter((c) => c.status === "active").length;
    const totalReach = campaigns.reduce((sum, c) => sum + (c.actualReach || 0), 0);

    return (
        <div className="flex flex-col">
            <TopBar />

            <div className="p-6">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">Campaigns</h1>
                        <p className="text-foreground-muted">
                            Manage sponsorships and brand partnerships
                        </p>
                    </div>
                    <button
                        onClick={() => setShowModal(true)}
                        className="btn btn-primary flex items-center gap-2"
                    >
                        <PlusIcon className="h-5 w-5" />
                        New Campaign
                    </button>
                </div>

                {/* Stats */}
                <div className="mb-6 grid grid-cols-4 gap-4">
                    <div className="card p-4">
                        <p className="text-sm text-foreground-muted">Total Revenue</p>
                        <p className="text-2xl font-bold text-accent-success">
                            {formatCurrency(totalRevenue)}
                        </p>
                    </div>
                    <div className="card p-4">
                        <p className="text-sm text-foreground-muted">Active Campaigns</p>
                        <p className="text-2xl font-bold text-accent-primary">{activeCampaigns}</p>
                    </div>
                    <div className="card p-4">
                        <p className="text-sm text-foreground-muted">Total Reach</p>
                        <p className="text-2xl font-bold text-foreground">{formatNumber(totalReach)}</p>
                    </div>
                    <div className="card p-4">
                        <p className="text-sm text-foreground-muted">All Campaigns</p>
                        <p className="text-2xl font-bold text-foreground">{campaigns.length}</p>
                    </div>
                </div>

                {/* Campaigns Grid */}
                {loading ? (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="skeleton h-48 rounded-xl" />
                        ))}
                    </div>
                ) : campaigns.length === 0 ? (
                    <div className="card flex flex-col items-center py-16">
                        <div className="mb-4 text-6xl">🤝</div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground">
                            No campaigns yet
                        </h3>
                        <p className="mb-6 text-foreground-muted">
                            Start tracking your brand partnerships and sponsorships
                        </p>
                        <button
                            onClick={() => setShowModal(true)}
                            className="btn btn-primary"
                        >
                            Create Your First Campaign
                        </button>
                    </div>
                ) : (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {campaigns.map((campaign) => (
                            <div key={campaign.id} className="card p-4">
                                <div className="mb-3 flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-streamlyte text-xl">
                                            {campaign.brandLogo || "🏢"}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">
                                                {campaign.brandName}
                                            </h3>
                                            <span
                                                className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium capitalize text-white ${statusColors[campaign.status] || "bg-gray-500"
                                                    }`}
                                            >
                                                {campaign.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-foreground-muted">Amount</span>
                                        <span className="font-medium text-accent-success">
                                            {formatCurrency(campaign.agreedAmount)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-foreground-muted">Expected Reach</span>
                                        <span className="text-foreground">
                                            {formatNumber(campaign.expectedReach)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-foreground-muted">Actual Reach</span>
                                        <span className="font-medium text-accent-primary">
                                            {formatNumber(campaign.actualReach)}
                                        </span>
                                    </div>
                                </div>

                                {campaign.notes && (
                                    <p className="mt-3 text-xs text-foreground-subtle line-clamp-2">
                                        {campaign.notes}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Create Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="card w-full max-w-md p-6">
                        <h2 className="mb-4 text-xl font-semibold text-foreground">
                            New Campaign
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-foreground">
                                    Brand Name *
                                </label>
                                <input
                                    type="text"
                                    value={newCampaign.brandName}
                                    onChange={(e) =>
                                        setNewCampaign({ ...newCampaign, brandName: e.target.value })
                                    }
                                    placeholder="e.g., Nike, Apple"
                                    className="input w-full"
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-foreground">
                                    Agreed Amount ($)
                                </label>
                                <input
                                    type="number"
                                    value={newCampaign.agreedAmount}
                                    onChange={(e) =>
                                        setNewCampaign({ ...newCampaign, agreedAmount: e.target.value })
                                    }
                                    placeholder="1000"
                                    className="input w-full"
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-foreground">
                                    Expected Reach
                                </label>
                                <input
                                    type="number"
                                    value={newCampaign.expectedReach}
                                    onChange={(e) =>
                                        setNewCampaign({ ...newCampaign, expectedReach: e.target.value })
                                    }
                                    placeholder="50000"
                                    className="input w-full"
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-foreground">
                                    Notes
                                </label>
                                <textarea
                                    value={newCampaign.notes}
                                    onChange={(e) =>
                                        setNewCampaign({ ...newCampaign, notes: e.target.value })
                                    }
                                    placeholder="Campaign details..."
                                    className="input w-full"
                                    rows={3}
                                />
                            </div>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="btn btn-secondary flex-1"
                            >
                                Cancel
                            </button>
                            <button onClick={handleCreate} className="btn btn-primary flex-1">
                                Create Campaign
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
