// Dashboard Layout - Layout with sidebar for authenticated pages
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Sidebar from "@/components/layout/Sidebar";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Auth bypassed for mock mode
    // const session = await getServerSession(authOptions);
    // if (!session) redirect("/login");

    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar />
            <main className="ml-64 flex-1">
                {children}
            </main>
        </div>
    );
}
