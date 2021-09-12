/* eslint-disable react/jsx-pascal-case */
import { TextSmallNormal } from "../font/TexSmallNormal";
import { TextMediumNormal } from "../font/TextMediumNormal";
import { _Container, _Line } from "./styles";

export const Card = ({ children, title, description }) => {
  return (
    <_Container>
      <TextMediumNormal>{title}</TextMediumNormal>
      <_Line />
      <TextSmallNormal>{description}</TextSmallNormal>
      {children}
    </_Container>
  );
};
