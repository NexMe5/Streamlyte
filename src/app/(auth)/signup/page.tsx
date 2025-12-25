// Signup Page
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SignupPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        if (formData.password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Account created! Please sign in.");
                router.push("/login");
            } else {
                toast.error(data.error || "Failed to create account");
            }
        } catch (error) {
            toast.error("An error occurred during signup");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-background p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-streamlyte shadow-lg">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-8 w-8 text-white"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold">
                        <span className="text-foreground">Stream</span>
                        <span className="text-gradient">lyte</span>
                    </h1>
                    <p className="mt-2 text-foreground-muted">
                        Create your account to get started
                    </p>
                </div>

                {/* Form */}
                <div className="card p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="input w-full"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="input w-full"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-foreground">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="input w-full"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-medium text-foreground">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="input w-full"
                                required
                            />
                        </div>

                        <div className="flex items-start gap-2">
                            <input type="checkbox" id="terms" className="mt-1 rounded border-border" required />
                            <label htmlFor="terms" className="text-sm text-foreground-muted">
                                I agree to the{" "}
                                <Link href="/terms" className="text-accent-primary hover:underline">
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link href="/privacy" className="text-accent-primary hover:underline">
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-primary w-full py-2.5 disabled:opacity-50"
                        >
                            {loading ? "Creating account..." : "Create Account"}
                        </button>
                    </form>
                </div>

                <p className="mt-6 text-center text-sm text-foreground-muted">
                    Already have an account?{" "}
                    <Link href="/login" className="text-accent-primary hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
