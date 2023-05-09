import { PrismaClient } from '@prisma/client';
import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

import { ProfileType } from './types';

const prisma = new PrismaClient();

export const ProfileQuery = new GraphQLObjectType({
  name: 'ProfileQuery',
  fields: {
    listProfiles: {
      type: new GraphQLList(ProfileType),
      resolve: async () => {
        const result = await prisma.profile.findMany();
        return result;
      },
    },
    findProfile: {
      type: ProfileType,
      args: {
        role: { type: GraphQLString },
      },
      resolve: async (parent, args, context) => {
        const result = await prisma.profile.findFirst({
          where: {
            role: args.role,
          },
        });
        return result;
      },
    },
  },
});
