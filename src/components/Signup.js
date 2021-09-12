import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { MUTATION_SIGNUP } from "./graphql/mutation/mutationSignup";
import { AUTH_TOKEN } from "./constants";
import { SplitView } from "./SplitView";

const Signup = () => {
  const history = useHistory();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
  });

  const [signup] = useMutation(MUTATION_SIGNUP, {
    variables: {
      name: formState.name,
      lastname: formState.lastname,
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ signup }) => {
      localStorage.setItem(AUTH_TOKEN, signup.token);
      history.push("/inicio");
    },
  });

  return (
    <SplitView>
      <div>
        <h4>Registrar</h4>

        <div>
          <input
            value={formState.name}
            onChange={(e) => {
              setFormState({
                ...formState,
                name: e.target.value,
              });
            }}
            type="text"
            placeholder="Nombres"
          />
          <input
            value={formState.lastname}
            onChange={(e) =>
              setFormState({
                ...formState,
                lastname: e.target.value,
              })
            }
            type="text"
            placeholder="Apellidos"
          />

          <input
            value={formState.email}
            onChange={(e) =>
              setFormState({
                ...formState,
                email: e.target.value,
              })
            }
            type="text"
            placeholder="correo@falso.com"
          />
          <input
            value={formState.password}
            onChange={(e) =>
              setFormState({
                ...formState,
                password: e.target.value,
              })
            }
            type="password"
            placeholder="Escoge una contraseña segura"
          />
        </div>

        <div style={{ backgroundColor: "red" }} onClick={signup}>
          Ingresar
        </div>
      </div>
    </SplitView>
  );
};

export default Signup;
