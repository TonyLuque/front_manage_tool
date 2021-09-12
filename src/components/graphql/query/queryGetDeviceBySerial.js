import { gql } from "@apollo/client";

export const QUERY_GET_DEVICE_BY_SERIAL = gql`
  query ($serial: String!) {
    getDeviceBySerial(serial: $serial) {
      id
      serial
      name
      type
      operativeSystem
      assignedAt
      owner {
        id
        name
        lastname
        email
      }
    }
  }
`;
