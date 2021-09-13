import { gql } from "@apollo/client";

export const QUERY_GET_DEVICES = gql`
  query {
    getDevices {
      id
      serial
      name
      type
      operativeSystem
      owner {
        name
        lastname
        email
        id
      }
    }
  }
`;
