import { GraphQLObjectType, GraphQLString } from 'graphql';

export const ProfileType = new GraphQLObjectType({
  name: 'profileType',
  fields: {
    id: { type: GraphQLString },
    role: { type: GraphQLString },
  },
});
