// Prisma Client Singleton - COMMENTED OUT FOR MOCK MODE
// import { PrismaClient } from '@prisma/client';

// const globalForPrisma = globalThis as unknown as {
//     prisma: PrismaClient | undefined;
// };

// export const prisma = globalForPrisma.prisma ?? new PrismaClient();

// if (process.env.NODE_ENV !== 'production') {
//     globalForPrisma.prisma = prisma;
// }

// export default prisma;
export const prisma = {} as any; // Mock export
