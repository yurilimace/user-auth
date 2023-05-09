import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserController } from '../User';
import { env } from 'process';
import { GraphQLError } from 'graphql';

const prisma = new PrismaClient();

export const AuthenticationController = {
  Login: async (email: string, password: string) => {
    const user = await UserController.findUserByEmail(email);
    if (!user) {
      throw new GraphQLError('Usuário não existe', {
        extensions: {
          code: 'BAD_REQUEST',
        },
      });
    }
    const verifiedPassword = await bcrypt.compare(password, user.password);

    if (verifiedPassword) {
      const token = jwt.sign(
        {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.profile.role,
        },
        env.JWT_KEY as string
      );
      return {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token,
      };
    }
    throw new GraphQLError('Senha não bate', {
      extensions: {
        code: 'BAD_REQUEST',
      },
    });
  },
};
