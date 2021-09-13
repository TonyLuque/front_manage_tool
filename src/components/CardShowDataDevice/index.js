/* eslint-disable react/jsx-pascal-case */
import { TextSmallNormal } from "../font/TexSmallNormal";
import { TextMediumNormal } from "../font/TextMediumNormal";
import { _Container } from "./styles";

export const CardShowDataDevice = ({ data }) => {
  return (
    <_Container>
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
        Fecha de asignación: {data["assignedAt"]}
      </TextSmallNormal>
    </_Container>
  );
};
