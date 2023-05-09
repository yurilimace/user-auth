import { mergeSchemas } from '@graphql-tools/schema';
import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { ProfileQuery } from './Profile/query';

import { UserQuery } from './User/query';
import { UserMutation } from './User/mutation';
import { AuthenticationMutation } from './Authentication/mutation';

const rootQuery = new GraphQLObjectType({
  name: 'rootQuery',
  fields: {
    ...UserQuery.toConfig().fields,
    ...ProfileQuery.toConfig().fields,
  },
});

const rootMutation = new GraphQLObjectType({
  name: 'rootMutation',
  fields: {
    ...UserMutation.toConfig().fields,
    ...AuthenticationMutation.toConfig().fields,
  },
});

export const rootSchema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});
