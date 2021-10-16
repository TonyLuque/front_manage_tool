import React, { useState } from "react";
import "./index.css";
import App from "./App";

import { setContext } from "@apollo/client/link/context";

import { BrowserRouter } from "react-router-dom";

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { GlobalContext } from "./auth/utils/GlobalContext";

export const Apollo = () => {
  const [token, setToken] = useState(null);

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const httpLink = createHttpLink({
    uri: "http://localhost:4000",
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      <BrowserRouter>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
};
