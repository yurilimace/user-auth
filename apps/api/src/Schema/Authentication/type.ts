import { GraphQLObjectType, GraphQLString } from 'graphql';

const authenticationType = new GraphQLObjectType({
  name: 'authenticatedUserType',
  fields: {
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    token: { type: GraphQLString },
  },
});

export { authenticationType };
