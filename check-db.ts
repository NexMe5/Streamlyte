
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient({
    log: ['info', 'warn', 'error'],
});

async function main() {
    try {
        console.log("Connecting to database...");
        const userCount = await prisma.user.count();
        console.log(`Successfully connected! Found ${userCount} users.`);
    } catch (e) {
        console.error("Connection failed:", e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
