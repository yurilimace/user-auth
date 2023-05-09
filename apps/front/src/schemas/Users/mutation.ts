import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($email: String, $password: String) {
    response(email: $email, password: $password) {
      firstName
      lastName
      token
      email
    }
  }
`;

export const REGISTERUSER = gql`
  mutation RegisterUser(
    $firstName: String
    $lastName: String
    $email: String
    $password: String
    $isAdmin: Boolean
    $age: Int
  ) {
    createUser(
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
      isAdmin: $isAdmin
      age: $age
    ) {
      firstName
      lastName
      email
    }
  }
`;

export const UPDATEUSERPROFILE = gql`
  mutation UPDATEUSERPROFILE($id: String, $newRole: String) {
    updateUser(id: $id, newRole: $newRole) {
      firstName
      lastName
      profile {
        role
        id
      }
    }
  }
`;
