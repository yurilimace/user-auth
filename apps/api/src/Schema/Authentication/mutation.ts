import { PrismaClient } from '@prisma/client';
import { GraphQLError, GraphQLObjectType, GraphQLString } from 'graphql';
import { authenticationType } from './type';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AuthenticationController } from '../../Controller/Authentication';

const prisma = new PrismaClient();

const AuthenticationMutation = new GraphQLObjectType({
  name: 'AuthMutation',
  fields: {
    response: {
      type: authenticationType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve: async (parent, { email, password }, context) => {
        const result = await AuthenticationController.Login(email, password);

        if (!result) {
          throw new GraphQLError('Usuário não existe', {
            extensions: {
              code: 'BAD_REQUEST',
            },
          });
        }

        return result;
      },
    },
  },
});

export { AuthenticationMutation };
