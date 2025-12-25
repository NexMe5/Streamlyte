// Connected Accounts Page
"use client";

import { useState, useEffect } from "react";
import TopBar from "@/components/layout/TopBar";
import toast from "react-hot-toast";
import {
    ArrowPathIcon,
    PlusIcon,
    CheckCircleIcon,
    ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

interface SocialAccount {
    id: string;
    platform: string;
    handle: string;
    displayName?: string;
    status: string;
    autoSync: boolean;
    lastSyncedAt?: string;
}

const platformInfo: Record<string, { name: string; icon: string; color: string }> = {
    instagram: { name: "Instagram", icon: "📸", color: "from-pink-500 to-purple-500" },
    youtube: { name: "YouTube", icon: "▶️", color: "from-red-500 to-red-600" },
    linkedin: { name: "LinkedIn", icon: "💼", color: "from-blue-600 to-blue-700" },
    twitter: { name: "Twitter/X", icon: "🐦", color: "from-sky-400 to-sky-500" },
};

export default function AccountsPage() {
    const [accounts, setAccounts] = useState<SocialAccount[]>([]);
    const [loading, setLoading] = useState(true);
    const [syncing, setSyncing] = useState<string | null>(null);
    const [showConnectModal, setShowConnectModal] = useState(false);

    useEffect(() => {
        fetchAccounts();
    }, []);

    const fetchAccounts = async () => {
        try {
            const res = await fetch("/api/accounts");
            const data = await res.json();
            if (data.success) {
                setAccounts(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch accounts:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSync = async (accountId: string) => {
        setSyncing(accountId);
        try {
            const res = await fetch(`/api/accounts/${accountId}/sync`, {
                method: "POST",
            });
            const data = await res.json();
            if (data.success) {
                toast.success("Sync completed!");
                fetchAccounts();
            } else {
                toast.error(data.error || "Sync failed");
            }
        } catch (error) {
            toast.error("Failed to sync account");
        } finally {
            setSyncing(null);
        }
    };

    const handleConnect = async (platform: string) => {
        // In a real app, this would redirect to OAuth
        // For now, we'll simulate connecting with a mock account
        try {
            const res = await fetch("/api/accounts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    platform,
                    handle: `@mock_${platform}_user`,
                    displayName: `Mock ${platformInfo[platform]?.name} Account`,
                }),
            });
            const data = await res.json();
            if (data.success) {
                toast.success(`${platformInfo[platform]?.name} connected!`);
                setShowConnectModal(false);
                fetchAccounts();
            } else {
                toast.error(data.error || "Failed to connect");
            }
        } catch (error) {
            toast.error("Failed to connect account");
        }
    };

    const handleDisconnect = async (accountId: string) => {
        if (!confirm("Are you sure you want to disconnect this account?")) return;

        try {
            const res = await fetch(`/api/accounts/${accountId}`, {
                method: "DELETE",
            });
            const data = await res.json();
            if (data.success) {
                toast.success("Account disconnected");
                fetchAccounts();
            } else {
                toast.error(data.error || "Failed to disconnect");
            }
        } catch (error) {
            toast.error("Failed to disconnect account");
        }
    };

    const formatDate = (dateString?: string) => {
        if (!dateString) return "Never";
        const date = new Date(dateString);
        return date.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <div className="flex flex-col">
            <TopBar />

            <div className="p-6">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">Connected Accounts</h1>
                        <p className="text-foreground-muted">
                            Manage your social media accounts and sync settings
                        </p>
                    </div>
                    <button
                        onClick={() => setShowConnectModal(true)}
                        className="btn btn-primary flex items-center gap-2"
                    >
                        <PlusIcon className="h-5 w-5" />
                        Connect Account
                    </button>
                </div>

                {/* Accounts Grid */}
                {loading ? (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="skeleton h-48 rounded-xl" />
                        ))}
                    </div>
                ) : accounts.length === 0 ? (
                    <div className="card flex flex-col items-center justify-center py-16">
                        <div className="mb-4 text-6xl">🔗</div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground">
                            No accounts connected
                        </h3>
                        <p className="mb-6 text-foreground-muted">
                            Connect your social media accounts to start tracking metrics
                        </p>
                        <button
                            onClick={() => setShowConnectModal(true)}
                            className="btn btn-primary"
                        >
                            Connect Your First Account
                        </button>
                    </div>
                ) : (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {accounts.map((account) => {
                            const info = platformInfo[account.platform];
                            return (
                                <div key={account.id} className="card overflow-hidden">
                                    {/* Header */}
                                    <div className={`bg-gradient-to-r ${info?.color || "from-gray-500 to-gray-600"} p-4`}>
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl">
                                                {info?.icon || "📱"}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-white">
                                                    {info?.name || account.platform}
                                                </p>
                                                <p className="text-sm text-white/80">{account.handle}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <div className="p-4">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                {account.status === "active" ? (
                                                    <CheckCircleIcon className="h-5 w-5 text-accent-success" />
                                                ) : (
                                                    <ExclamationCircleIcon className="h-5 w-5 text-accent-warning" />
                                                )}
                                                <span className="text-sm capitalize text-foreground-muted">
                                                    {account.status}
                                                </span>
                                            </div>
                                            <span className="text-xs text-foreground-subtle">
                                                Last synced: {formatDate(account.lastSyncedAt)}
                                            </span>
                                        </div>

                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleSync(account.id)}
                                                disabled={syncing === account.id}
                                                className="btn btn-secondary flex-1 flex items-center justify-center gap-2"
                                            >
                                                <ArrowPathIcon
                                                    className={`h-4 w-4 ${syncing === account.id ? "animate-spin" : ""}`}
                                                />
                                                {syncing === account.id ? "Syncing..." : "Sync Now"}
                                            </button>
                                            <button
                                                onClick={() => handleDisconnect(account.id)}
                                                className="btn btn-ghost text-accent-error"
                                            >
                                                Disconnect
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Connect Modal */}
            {showConnectModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="card w-full max-w-md p-6">
                        <h2 className="mb-4 text-xl font-semibold text-foreground">
                            Connect a Platform
                        </h2>
                        <p className="mb-6 text-foreground-muted">
                            Select a platform to connect. You'll be redirected to authorize access.
                        </p>
                        <div className="space-y-3">
                            {Object.entries(platformInfo).map(([key, info]) => (
                                <button
                                    key={key}
                                    onClick={() => handleConnect(key)}
                                    className={`flex w-full items-center gap-3 rounded-lg bg-gradient-to-r ${info.color} p-4 text-left text-white transition-all hover:opacity-90`}
                                >
                                    <span className="text-2xl">{info.icon}</span>
                                    <span className="font-medium">{info.name}</span>
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setShowConnectModal(false)}
                            className="btn btn-ghost mt-4 w-full"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
