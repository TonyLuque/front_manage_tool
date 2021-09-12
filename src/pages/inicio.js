import React from "react";
import { useHistory } from "react-router-dom";
import { AUTH_TOKEN } from "../components/constants";

const Inicio = () => {
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const token = localStorage.getItem(AUTH_TOKEN);
  if (token === null) {
    history.push("/");
  }

  return (
    <div>
      <div
        onClick={() => {
          localStorage.setItem(AUTH_TOKEN, null);
          history.push("/");
        }}
      >
        Cerrar sesión
      </div>
      oa {AUTH_TOKEN}
    </div>
  );
};

export default Inicio;
