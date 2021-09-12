import React from "react";
import { useHistory } from "react-router-dom";
import { AUTH_TOKEN } from "../components/constants";
import "../styles/Inicio.css";

import { TextSmallNormal } from "../components/font/TexSmallNormal";
import { TextLargeNormal } from "../components/font/TextLargeNormal";
import { TextMediumNormal } from "../components/font/TextMediumNormal";
import { Card } from "../components/Card";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";
import { Variables } from "../styles/Variables";

const Inicio = () => {
  const history = useHistory();
  // const token = localStorage.getItem(AUTH_TOKEN);
  // if (token === null) {
  //   history.push("/");
  // }

  return (
    <div>
      <div className="header">
        logo
        <div className="nav">
          <TextSmallNormal>Hola</TextSmallNormal>
          <div className="verticalLine"></div>
          <TextSmallNormal
            isLink
            onClick={() => {
              localStorage.setItem(AUTH_TOKEN, null);
              history.push("/");
            }}
          >
            Salir
          </TextSmallNormal>
        </div>
      </div>
      <TextLargeNormal>Suministro de dotación</TextLargeNormal>
      <TextMediumNormal>
        Busca, compara y asigna la dotación a los usuarios en el sistema. Puedes
        crear los usuarios si no estan registrados.
      </TextMediumNormal>
      <div className="containerModules">
        <Card
          title="Busqueda de dispositivo"
          description="Ingresa el id(serial) del dispositivo para saber si esta registrado y/o asignado."
        >
          <TextInput placeholder="Número de serial" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 100,
            }}
          >
            <Button title="Todos" />
            <Button title="Buscar" />
          </div>
        </Card>
        <div className="verticalLine"></div>
        <Card
          title="Busqueda de usuario"
          description="Verifica si el usuario existe y que dispositivos tiene asignados."
        >
          <TextInput placeholder="Correo eléctronico" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 100,
            }}
          >
            <Button title="Crear" /> <Button title="Buscar" />
          </div>
        </Card>
        <div className="verticalLine"></div>
        <Card
          title="Asignación de dispositivo"
          description="Ingresa el serial del dispositivo y el id del usuario. Si no sabes el id del usuario buscalo en el modulo del centro."
        >
          <TextInput placeholder="Número de serial" />
          <TextInput placeholder="ID de usuario" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 100,
            }}
          >
            <div></div>
            <Button title="Buscar" />
          </div>
        </Card>
      </div>
      <footer style={{ padding: 5 }}>
        <TextSmallNormal>
          Diseño cortesia de{" "}
          <a
            href="https://www.behance.net/julymc"
            target="_blank"
            rel="noreferrer"
            style={{ color: Variables.colorWhite }}
          >
            July Muñoz
          </a>
        </TextSmallNormal>
      </footer>
    </div>
  );
};

export default Inicio;
