import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { MUTATION_LOGIN } from "./graphql/mutation/mutationLogin";
import { AUTH_TOKEN } from "./constants";
import { SplitView } from "./SplitView";
import { TextInput } from "./TextInput";
import { Variables } from "../styles/Variables";
import { TextSmallNormal } from "./font/TexSmallNormal";
import { Button } from "./Button";

const Login = () => {
  const history = useHistory();
  const [txtEmail, setTxtEmail] = useState("");
  const [txtPassword, setTxtPassword] = useState("");

  const [login, { error }] = useMutation(MUTATION_LOGIN, {
    variables: {
      email: txtEmail,
      password: txtPassword,
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login.token);
      history.push("/inicio");
    },
    onError: (e) => console.error(e),
  });

  if (error) {
    alert("Algo salio mal, intentelo mas tarde");
  }

  return (
    <SplitView>
      <div>
        <div>
          <TextInput
            value={txtEmail}
            onChange={(e) => setTxtEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <TextInput
            value={txtPassword}
            onChange={(e) => setTxtPassword(e.target.value)}
            type="text"
            placeholder="password"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextSmallNormal>Olvido su contraseña</TextSmallNormal>
          <Button title={"Ingresar"} onClick={login} type="submit" />
        </div>
        <div
          style={{
            color: Variables.colorWhite,
            marginTop: 100,
          }}
          onClick={() => history.push("/signup")}
        >
          No tengo una cuenta,{" "}
          <span style={{ textDecorationLine: "underline" }}>
            crear una ahora
          </span>
        </div>
      </div>
    </SplitView>
  );
};

export default Login;
