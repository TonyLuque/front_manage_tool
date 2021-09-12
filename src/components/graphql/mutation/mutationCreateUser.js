import { gql } from "@apollo/client";

export const MUTATION_CREATE_USER = gql`
  mutation CreateUserMutation(
    $name: String!
    $email: String!
    $lastname: String!
  ) {
    createUser(name: $name, email: $email, lastname: $lastname) {
      id
      name
      lastname
    }
  }
`;
