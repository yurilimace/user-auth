import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import { ProfileType } from '../Profile/types';

const userType = new GraphQLObjectType({
  name: 'userType',
  fields: {
    id: { type: GraphQLString },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    age: { type: GraphQLInt },
    profile: { type: ProfileType },
    profileId: { type: GraphQLString },
  },
});

export { userType };
