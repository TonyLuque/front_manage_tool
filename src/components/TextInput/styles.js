import styled from "styled-components";
import { Variables } from "../../styles/Variables";

export const _Container = styled.input`
  box-sizing: border-box;
  width: 100%;
  background-color: transparent;
  font-size: 14px;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 2px solid ${Variables.colorGrayCLear};
  color: ${Variables.colorWhite};
  ::placeholder {
    color: ${Variables.colorGray};
  }
  &:focus {
    border: 2px solid ${Variables.colorPurple};
    outline: none;
  }
`;
