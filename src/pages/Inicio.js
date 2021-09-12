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
        <Card></Card>
        <div className="verticalLine"></div>
        <Card></Card>
        <div className="verticalLine"></div>
        <Card></Card>
      </div>
    </div>
  );
};

export default Inicio;
