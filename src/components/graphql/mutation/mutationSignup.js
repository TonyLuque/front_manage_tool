import { gql } from "@apollo/client";

export const MUTATION_SIGNUP = gql`
  mutation SignupMutation(
    $email: String!
    $password: String!
    $name: String!
    $lastname: String!
  ) {
    signup(
      email: $email
      password: $password
      name: $name
      lastname: $lastname
    ) {
      token
    }
  }
`;
