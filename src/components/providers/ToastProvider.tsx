// Toast Provider
"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
    return (
        <Toaster
            position="top-right"
            toastOptions={{
                duration: 4000,
                style: {
                    background: "var(--background-secondary)",
                    color: "var(--foreground)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                },
                success: {
                    iconTheme: {
                        primary: "var(--accent-success)",
                        secondary: "white",
                    },
                },
                error: {
                    iconTheme: {
                        primary: "var(--accent-error)",
                        secondary: "white",
                    },
                },
            }}
        />
    );
}
