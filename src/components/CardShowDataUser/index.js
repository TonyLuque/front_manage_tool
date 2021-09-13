/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import { TextSmallNormal } from "../font/TexSmallNormal";
import { TextMediumNormal } from "../font/TextMediumNormal";
import { _Container } from "./styles";

export const CardShowDataUser = ({ data }) => {
  const [display, setDisplay] = useState(null);
  data === null && setTimeout(() => setDisplay("none"), 6000);
  return (
    <_Container style={{ display: display }}>
      {data === null ? (
        <TextMediumNormal>No se encotro el usuario</TextMediumNormal>
      ) : (
        <div>
          <TextMediumNormal>{data["id"]}</TextMediumNormal>
          <TextSmallNormal>Nombre: {data["name"]}</TextSmallNormal>
          <TextSmallNormal>Apellido: {data["lastname"]}</TextSmallNormal>
          <TextSmallNormal>Email: {data["email"]}</TextSmallNormal>
        </div>
      )}
    </_Container>
  );
};
