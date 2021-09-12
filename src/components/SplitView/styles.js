import styled from "styled-components";

import { Variables } from "../../styles/Variables";

export const _Container = styled.div`
    display:flex;
    width: 100vw,
    height:100vh;
    overflow-x: hidden;
`;

export const _LeftDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 676px;
  height: 100vh;
  background-color: ${Variables.colorBackground};
`;

export const _RightDiv = styled.div`
  width: calc(100vw - 676px);
  height: 100vh;
  background-color: ${Variables.colorGrayCLear};
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const _Video = styled.video`
  width: 100%;
`;
