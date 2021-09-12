import { gql } from "@apollo/client";

export const MUTATION_ASSIGN_DEVICE = gql`
  mutation AssignDeviceMutation($serial: String!, $idAssignedUser: String!) {
    assignDevice(serial: $serial, idAssignedUser: $idAssignedUser) {
      id
    }
  }
`;
