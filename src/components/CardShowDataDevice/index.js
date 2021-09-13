/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import { TextSmallNormal } from "../font/TexSmallNormal";
import { TextMediumNormal } from "../font/TextMediumNormal";
import { _Container } from "./styles";

export const CardShowDataDevice = ({ data }) => {
  const [display, setDisplay] = useState(null);
  data === null && setTimeout(() => setDisplay("none"), 6000);
  return (
    <_Container style={{ display: display }}>
      {data === null ? (
        <TextMediumNormal>No se encotro el dispositivo</TextMediumNormal>
      ) : (
        <div>
          <TextMediumNormal>
            {data["serial"] === null ? data["id"] : data["serial"]}
          </TextMediumNormal>
          <TextSmallNormal>Nombre: {data["name"]}</TextSmallNormal>
          <TextSmallNormal>Tipo: {data["type"]}</TextSmallNormal>
          <TextSmallNormal>SO: {data["operativeSystem"]}</TextSmallNormal>
          {data["owner"] !== null ? (
            <div>
              <TextSmallNormal>
                Propietario: {data["owner"].name} {data["owner"].lastname}
              </TextSmallNormal>
              <TextSmallNormal>
                Email propietario: {data["owner"].email}
              </TextSmallNormal>
            </div>
          ) : null}

          <TextSmallNormal>
            Fecha de asignación:{" "}
            {new Date(Number(data["assignedAt"])).toLocaleDateString("es-ES")}
          </TextSmallNormal>
        </div>
      )}
    </_Container>
  );
};
