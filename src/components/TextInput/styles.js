import styled from "styled-components";
import { Variables } from "../../styles/Variables";

export const _Container = styled.input`
  box-sizing: border-box;
  width: 100%;
  background-color: transparent;
  font-size: 14px;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid ${Variables.colorGrayCLear};
  ::placeholder {
    color: ${Variables.colorGray};
  }
`;
