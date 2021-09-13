import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { MUTATION_CREATE_USER } from "./components/graphql/mutation/mutationCreateUser";
import { SplitView } from "./components/SplitView";
import { TextInput } from "./components/TextInput";
import { Button } from "./components/Button";
import { TextMediumNormal } from "./components/font/TextMediumNormal";

const CreateUser = () => {
  const history = useHistory();
  const [formState, setFormState] = useState({
    email: "",
    name: "",
    lastname: "",
  });

  const [signup] = useMutation(MUTATION_CREATE_USER, {
    variables: {
      name: formState.name,
      lastname: formState.lastname,
      email: formState.email,
    },
    onCompleted: ({ signup }) => {
      history.push("/");
    },
  });

  return (
    <SplitView>
      <div>
        <TextMediumNormal>Crear usuario</TextMediumNormal>

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
        </div>
        <div>
          <Button title="Crear" onClick={signup} />
        </div>
      </div>
    </SplitView>
  );
};

export default CreateUser;
