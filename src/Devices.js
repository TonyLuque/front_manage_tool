import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GET_DEVICES } from "./components/graphql/query/queryGetDevices";
import { TextSmallNormal } from "./components/font/TexSmallNormal";
import "./Devices.css";
import { TextLargeNormal } from "./components/font/TextLargeNormal";
import { useHistory } from "react-router";
import { AUTH_TOKEN } from "./constants";

const Devices = () => {
  const history = useHistory();
  const token = localStorage.getItem(AUTH_TOKEN);

  if (token === "null") {
    history.push("/login");
  }

  const { data, error } = useQuery(QUERY_GET_DEVICES, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "network-only",
  });
  if (error) alert("Algo ha salido mal, intentalo mas tarde.");
  if (data) console.log(data);
  let devices = [];

  if (data) {
    const { getDevices } = data;
    devices = getDevices.map((e) => {
      return (
        <div className="listItem">
          <TextSmallNormal>{e.serial}</TextSmallNormal>
          <TextSmallNormal>{e.name}</TextSmallNormal>
          <TextSmallNormal>{e.operativeSystem}</TextSmallNormal>
          <TextSmallNormal>{e.type}</TextSmallNormal>
          <TextSmallNormal>
            {e.owner.name} {e.owner.lastname}
          </TextSmallNormal>
          <TextSmallNormal>{e.owner.email}</TextSmallNormal>
        </div>
      );
    });
  }

  return (
    <div className="container">
      <TextSmallNormal className="link" onClick={() => history.push("/")}>
        Volver
      </TextSmallNormal>
      <TextLargeNormal>Dispositivos asignados</TextLargeNormal>
      <div className="listContainer">
        <div className="listItem titles">
          <TextSmallNormal>Serial</TextSmallNormal>
          <TextSmallNormal>Nombre</TextSmallNormal>
          <TextSmallNormal>SO</TextSmallNormal>
          <TextSmallNormal>Tipo</TextSmallNormal>
          <TextSmallNormal>Propietario</TextSmallNormal>
          <TextSmallNormal>Email</TextSmallNormal>
        </div>
        {devices}
      </div>
    </div>
  );
};

export default Devices;
