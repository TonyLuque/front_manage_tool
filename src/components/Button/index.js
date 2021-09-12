/* eslint-disable react/jsx-pascal-case */
import { _Button } from "./styles";

export const Button = ({ title, onClick, ...otherProps }) => {
  return (
    <_Button onClick={onClick} {...otherProps}>
      {title}
    </_Button>
  );
};
