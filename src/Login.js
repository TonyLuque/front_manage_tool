import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { MUTATION_LOGIN } from "./components/graphql/mutation/mutationLogin";
import { AUTH_TOKEN } from "./constants";
import { SplitView } from "./components/SplitView";
import { TextInput } from "./components/TextInput";
import { TextSmallNormal } from "./components/font/TexSmallNormal";
import { Button } from "./components/Button";
import { GlobalContext } from "./auth/utils/GlobalContext";

const Login = () => {
  const history = useHistory();
  const [txtEmail, setTxtEmail] = useState("");
  const [txtPassword, setTxtPassword] = useState("");
  const { setToken } = useContext(GlobalContext);

  if (
    window.sessionStorage.getItem(AUTH_TOKEN) !== "null" &&
    window.sessionStorage.getItem(AUTH_TOKEN) !== null
  ) {
    history.push("/");
  }

  const [login, { error }] = useMutation(MUTATION_LOGIN, {
    variables: {
      email: txtEmail,
      password: txtPassword,
    },
    onCompleted: ({ login }) => {
      if (process.browser) {
        window.sessionStorage.setItem(AUTH_TOKEN, login.token);
      }
      setToken(login.token);
      history.push("/");
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
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 100,
          }}
        >
          <TextSmallNormal>Olvido su contraseña</TextSmallNormal>
          <Button title={"Ingresar"} onClick={login} />
        </div>
        <TextSmallNormal isLink onClick={() => history.push("/signup")}>
          No tengo una cuenta,{" "}
          <span style={{ textDecorationLine: "underline" }}>
            crear una ahora
          </span>
        </TextSmallNormal>
      </div>
    </SplitView>
  );
};

export default Login;
