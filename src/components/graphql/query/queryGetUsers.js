import { gql } from "@apollo/client";

export const QUERY_GET_USERS = gql`
  query {
    getUsers {
      id
      name
      email
      createdAt
      modifiedAt
      lastname
      role
      devices {
        name
        id
        serial
      }
    }
  }
`;
