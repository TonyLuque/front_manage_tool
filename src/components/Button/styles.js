import styled from "styled-components";
import { Variables } from "../../styles/Variables";

export const _Button = styled.button`
  box-sizing: border-box;
  padding: 24px 20px;
  border-radius: 8px;
  background-color: ${Variables.colorPurple};
  color: ${Variables.colorWhite};
  font-weight: bold;
  cursor: pointer;
`;
