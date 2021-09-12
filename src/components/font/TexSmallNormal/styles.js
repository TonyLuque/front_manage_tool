import styled, { css } from "styled-components";

export const _Container = styled.p`
  font-size: 16px;
  text-align: "center";
  ${(props) =>
    props.isLink &&
    css`
      cursor: pointer;
    `}
`;
