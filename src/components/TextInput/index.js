/* eslint-disable react/jsx-pascal-case */
import { _Container } from "./styles";

export const TextInput = ({
  children,
  value,
  onChange,
  type,
  placeholder,
  ...otherProps
}) => {
  return (
    <_Container
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      {...otherProps}
    >
      {children}
    </_Container>
  );
};
