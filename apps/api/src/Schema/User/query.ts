import { PrismaClient } from '@prisma/client';
import {
  GraphQLError,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { userType } from './types';
import { UserController } from '../../Controller/User/index';
import jwt from 'jsonwebtoken';
const prisma = new PrismaClient();

export const UserQuery = new GraphQLObjectType({
  name: 'userQuery',
  fields: {
    users: {
      type: new GraphQLList(userType),
      args: {
        firstName: { type: GraphQLString },
      },
      resolve: async (parent, args, context) => {
        try {
          if (args.firstName) {
            const result = await UserController.findUser(args.firstName);
            return result;
          }
          const list = await UserController.listAllUser();
          return list;
        } catch (err) {
          context.res.status(500).json({ message: err });
        }
      },
    },
    user: {
      type: userType,
      args: {
        firstName: { type: GraphQLString },
      },
      resolve: async (parent, { firstName }, context) => {
        const result = await UserController.findUser(firstName);
        return result;
      },
    },
  },
});
