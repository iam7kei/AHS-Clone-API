import { prisma } from '../lib/prisma';

export const getUserByEmail = (email: string) => {
    return prisma.user.findUnique({
        where: { email },
    })
}
