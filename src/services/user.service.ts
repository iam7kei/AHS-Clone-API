import { prisma } from '../lib/prisma';

export const getUserByEmail = (email: string) => {
  return prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      first_name: true,
      last_name: true,
      password: true
    }
  })
}
