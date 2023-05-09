import { PrismaClient } from '@prisma/client';
import {
  GraphQLBoolean,
  GraphQLError,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { userType } from './types';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserController } from '../../Controller/User';
import { env } from 'process';

const prisma = new PrismaClient();

type tokenPayload = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

const UserMutation = new GraphQLObjectType({
  name: 'UserMutation',
  fields: {
    createUser: {
      type: userType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLInt },
        isAdmin: { type: GraphQLBoolean },
        password: {
          type: GraphQLString,
        },
      },
      resolve: async (parent, args, context) => {
        const profileResult = await prisma.profile.findFirst({
          where: { role: args.isAdmin ? 'userAdmin' : 'user' },
        });
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(args.password, salt);
        const result = await prisma.user.create({
          data: {
            firstName: args.firstName,
            lastName: args.lastName,
            age: args.age,
            password: hash,
            email: args.email,
            profile: {
              connect: {
                id: profileResult.id,
              },
            },
          },
        });
        return result;
      },
    },
    updateUser: {
      type: userType,
      args: {
        id: { type: GraphQLString },
        newRole: { type: GraphQLString },
      },
      resolve: async (parent, args, context) => {
        try {
          const verifyToken = jwt.verify(
            context.token,
            env.JWT_KEY as string
          ) as tokenPayload;

          if (verifyToken?.role === 'userAdmin') {
            const update = await UserController.updateUserProfile(
              args.id,
              args.newRole
            );
            return update;
          }
          return new GraphQLError('Não autorizado', {
            extensions: {
              code: 'UNAUTHENTICATED',
            },
          });
        } catch (err) {
          //return context.res.status(401).json(err);
        }
      },
    },
  },
});

export { UserMutation };
