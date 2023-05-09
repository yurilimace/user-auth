/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { PrismaClient } from '@prisma/client';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';

import express from 'express';

import { rootSchema } from './Schema';

const startApp = async () => {
  const app = express();

  const serverAp = new ApolloServer({
    schema: rootSchema,
  });

  await serverAp.start();

  app.use(
    '/api',
    express.json(),
    cors(),
    expressMiddleware(serverAp, {
      context: async ({ req, res }) => ({
        token: req.headers.authorization,
        res: res,
      }),
    })
  );

  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to api!' });
  });

  const port = process.env.PORT || 3333;
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
  server.on('error', console.error);
};

startApp();
