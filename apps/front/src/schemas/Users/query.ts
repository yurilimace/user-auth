import { gql } from '@apollo/client';

export const USERSLIST = gql`
  query GetUsers($firstName: String) {
    users(firstName: $firstName) {
      id
      firstName
      lastName
      email
      profile {
        role
      }
    }
  }
`;

export const GETUSERBYNAME = gql`
  query GetUsers($firstName: String) {
    users(firstName: $firstName) {
      id
      firstName
      lastName
      email
      profile {
        role
      }
    }
  }
`;
