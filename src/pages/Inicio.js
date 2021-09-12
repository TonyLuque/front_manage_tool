import React from "react";
import { useHistory } from "react-router-dom";
import { AUTH_TOKEN } from "../components/constants";
import "../styles/Inicio.css";

import { TextSmallNormal } from "../components/font/TexSmallNormal";
import { TextLargeNormal } from "../components/font/TextLargeNormal";
import { TextMediumNormal } from "../components/font/TextMediumNormal";
import { Card } from "../components/Card";

const Inicio = () => {
  const history = useHistory();
  const token = localStorage.getItem(AUTH_TOKEN);
  if (token === null) {
    history.push("/");
  }

  return (
    <div>
      <div className="header">
        logo
        <div className="nav">
          <TextSmallNormal>Hola</TextSmallNormal>
          <div className="verticalLine"></div>
          <TextSmallNormal
            onClick={() => {
              localStorage.setItem(AUTH_TOKEN, null);
              history.push("/");
            }}
          >
            Salir
          </TextSmallNormal>
        </div>
      </div>
      <TextLargeNormal>¿Como deseas ......?</TextLargeNormal>
      <TextMediumNormal>
        djfjhdf dfhsdfh sdf fhsdfh dfhsdkfhdfhsdfhdsfhdsf
      </TextMediumNormal>
      <div className="containerModules">
        <Card
          title="Busqueda de dispositivo"
          description="kjsdl lsjd ad sdj d lasd lsd"
        ></Card>
        <div className="verticalLine"></div>
        <Card
          title="Busqueda de usuario"
          description="kjsdl lsjd ad sdj d lasd lsd"
        ></Card>
        <div className="verticalLine"></div>
        <Card
          title="Asignación de dispositivo"
          description="kjsdl lsjd ad sdj d lasd lsd"
        ></Card>
      </div>
    </div>
  );
};

export default Inicio;
