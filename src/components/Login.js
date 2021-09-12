import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { MUTATION_LOGIN } from "./graphql/mutation/mutationLogin";
import { AUTH_TOKEN } from "./constants";
import { SplitView } from "./SplitView";

const Login = () => {
  const history = useHistory();
  const [txtEmail, setTxtEmail] = useState();
  const [txtPassword, setTxtPassword] = useState();

  const [login, { error }] = useMutation(MUTATION_LOGIN, {
    variables: {
      email: txtEmail,
      password: txtPassword,
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login.token);
      history.push("/inicio");
    },
  });

  if (error) {
    alert("el usuario no exite");
  }

  return (
    <SplitView>
      <div>
        <h4>Inicia sesión</h4>

        <div>
          <input
            value={txtEmail}
            onChange={(e) => setTxtEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            value={txtPassword}
            onChange={(e) => setTxtPassword(e.target.value)}
            type="text"
            placeholder="password"
          />
        </div>

        <div style={{ backgroundColor: "red" }} onClick={login}>
          Ingresar
        </div>
        <div
          style={{ backgroundColor: "red" }}
          onClick={() => history.push("/signup")}
        >
          Registrarse
        </div>
      </div>
    </SplitView>
  );
};

export default Login;
