import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  from,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { ContextProvider } from "./Context";

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem("token");
  const authorization = token ? `Bearer ${token}` : "";
  operation.setContext({
    headers: {
      authorization,
    },
  });
  return forward(operation);
});

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === "invalid_token") {
    sessionStorage.removeItem("token");
    window.location = "/user";
  }
});

const client = new ApolloClient({
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: "https://petgram-server-traka.vercel.app/graphql",
    }),
  ]),
  cache: new InMemoryCache(),
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <ContextProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ContextProvider>
);
