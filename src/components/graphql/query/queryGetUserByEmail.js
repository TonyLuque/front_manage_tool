import { gql } from "@apollo/client";

export const QUERY_GET_USER_BY_EMAIL = gql`
  query ($email: String!) {
    getUserByEmail(email: $email) {
      id
      name
      lastname
      email
      devices {
        id
        serial
        name
        type
        operativeSystem
      }
    }
  }
`;
