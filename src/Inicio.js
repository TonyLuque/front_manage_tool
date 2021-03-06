import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AUTH_TOKEN } from "./constants";
import "./styles/Inicio.css";

import { TextSmallNormal } from "./components/font/TexSmallNormal";
import { TextLargeNormal } from "./components/font/TextLargeNormal";
import { TextMediumNormal } from "./components/font/TextMediumNormal";
import { Card } from "./components/Card";
import { TextInput } from "./components/TextInput";
import { Button } from "./components/Button";
import { Variables } from "./styles/Variables";
import { useLazyQuery, useMutation } from "@apollo/client";
import { QUERY_GET_USER_BY_EMAIL } from "./components/graphql/query/queryGetUserByEmail";
import { MUTATION_ASSIGN_DEVICE } from "./components/graphql/mutation/mutationAssignDevice";
import { QUERY_GET_DEVICE_BY_SERIAL } from "./components/graphql/query/queryGetDeviceBySerial";
import { CardShowDataDevice } from "./components/CardShowDataDevice";
import { CardShowDataUser } from "./components/CardShowDataUser";
import { IconLogo } from "./components/icon/IconLogo";

const Inicio = () => {
  const history = useHistory();
  const [serial, setSerial] = useState("");
  const [serialAssing, setSerialAssing] = useState("");
  const [userAssing, setUserAssing] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const token = window.sessionStorage.getItem(AUTH_TOKEN);

  if (token === "null" || token === null) {
    history.push("/login");
  }

  const [
    getUserByEmail,
    { data: dataUser, loading: loadingUser, error: errorUser },
  ] = useLazyQuery(QUERY_GET_USER_BY_EMAIL, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "network-only",
  });

  const [
    getDeviceBySerial,
    { data: dataDevice, loading: loadingDevice, error: errorDevice },
  ] = useLazyQuery(QUERY_GET_DEVICE_BY_SERIAL, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "network-only",
  });

  const [assignDevice, { error: errorAssign, loading: loadingAssign }] =
    useMutation(MUTATION_ASSIGN_DEVICE, {
      onCompleted: () => alert("Se asigno el dispositivo con exito."),
      onError: (e) => alert(e.message),
    });

  if (loadingAssign) console.log("Loading...");
  if (errorAssign) console.log(`Error: ${errorAssign.message}`);

  if (loadingDevice) console.log("Loading...");
  if (errorDevice) console.log(`Error: ${errorDevice.message}`);

  if (loadingUser) console.log("Loading...");
  if (errorUser) console.log(`Error: ${errorUser.message}`);

  return (
    <div>
      <div className="header">
        <IconLogo />
        <div className="nav">
          <TextSmallNormal>Hola</TextSmallNormal>
          <div className="verticalLine"></div>
          <TextSmallNormal
            isLink
            onClick={() => {
              window.sessionStorage.setItem(AUTH_TOKEN, null);
              history.push("/login");
            }}
          >
            Salir
          </TextSmallNormal>
        </div>
      </div>
      <TextLargeNormal>Asignaci??n de dotaci??n</TextLargeNormal>
      <TextMediumNormal>
        Busca, compara y asigna la dotaci??n a los usuarios en el sistema. Puedes
        crear los usuarios si no estan registrados.
      </TextMediumNormal>
      <div className="containerModules">
        <Card
          title="Busqueda de dispositivo"
          description="Ingresa el id(serial) del dispositivo para saber si esta registrado y/o asignado."
        >
          <TextInput
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
            type="text"
            placeholder="N??mero de serial"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Button
              title="Dispositivos asignados"
              onClick={() => history.push("/devices")}
            />
            <Button
              title="Buscar"
              onClick={() => {
                serial && getDeviceBySerial({ variables: { serial: serial } });
              }}
            />
          </div>
          {dataDevice !== undefined ? (
            <CardShowDataDevice data={dataDevice.getDeviceBySerial} />
          ) : null}
        </Card>
        <div className="verticalLine"></div>
        <Card
          title="Busqueda de usuario"
          description="Verifica si el usuario existe o crea uno, si este no esta en el sistema."
        >
          <TextInput
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            type="text"
            placeholder="Correo el??ctronico"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Button title="Crear" onClick={() => history.push("/createUser")} />{" "}
            <Button
              title="Buscar"
              onClick={() =>
                userEmail && getUserByEmail({ variables: { email: userEmail } })
              }
            />
          </div>
          {dataUser !== undefined ? (
            <CardShowDataUser data={dataUser.getUserByEmail} />
          ) : null}
        </Card>
        <div className="verticalLine"></div>
        <Card
          title="Asignaci??n de dispositivo"
          description="Ingresa el serial del dispositivo y el id del usuario. Si no sabes el id del usuario buscalo en el modulo del centro."
        >
          <TextInput
            value={serialAssing}
            onChange={(e) => setSerialAssing(e.target.value)}
            type="text"
            placeholder="N??mero de serial"
          />
          <TextInput
            value={userAssing}
            onChange={(e) => setUserAssing(e.target.value)}
            type="text"
            placeholder="ID de usuario"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <div></div>
            <Button
              title="Buscar"
              onClick={() =>
                serialAssing && userAssing
                  ? assignDevice({
                      variables: {
                        serial: serialAssing,
                        idAssignedUser: userAssing,
                      },
                    })
                  : null
              }
            />
          </div>
        </Card>
      </div>
      <footer
        style={{ padding: 5, position: "fixed", top: 0, right: 0, left: 0 }}
      >
        <TextSmallNormal>
          Dise??o cortesia de{" "}
          <a
            href="https://www.behance.net/julymc"
            target="_blank"
            rel="noreferrer"
            style={{ color: Variables.colorWhite }}
          >
            July Mu??oz
          </a>
        </TextSmallNormal>
      </footer>
    </div>
  );
};

export default Inicio;
