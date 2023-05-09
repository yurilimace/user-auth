import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const UserController = {
  listAllUser: async () => {
    const result = await prisma.user.findMany({
      include: {
        profile: true,
      },
    });
    return result;
  },
  findUser: async (firstName: string) => {
    const result = await prisma.user.findMany({
      where: { firstName: firstName },
      include: {
        profile: true,
      },
    });
    return result;
  },
  findUserByEmail: async (email: string) => {
    const result = await prisma.user.findFirst({
      where: { email: email },
      include: {
        profile: true,
      },
    });
    return result;
  },
  updateUserProfile: async (id: string, newRole: string) => {
    const userNewRole = await prisma.profile.findFirst({
      where: {
        role: newRole,
      },
    });
    const result = await prisma.user.update({
      where: { id: id },
      include: { profile: true },
      data: {
        profileId: userNewRole.id,
      },
    });
    return result;
  },
};
