import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { MUTATION_SIGNUP } from "./graphql/mutation/mutationSignup";
import { AUTH_TOKEN } from "./constants";
import { SplitView } from "./SplitView";
import { TextInput } from "./TextInput";
import { Button } from "./Button";
import { TextMediumNormal } from "./font/TextMediumNormal";

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
        <TextMediumNormal>Registro</TextMediumNormal>

        <div>
          <TextInput
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
          <TextInput
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
          <TextInput
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
          <TextInput
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
        <div>
          <Button title="Registrarme" onClick={signup} />
        </div>
      </div>
    </SplitView>
  );
};

export default Signup;
