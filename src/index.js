import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ContextProvider } from "./Context";

const client = new ApolloClient({
  uri: "https://petgram-server-traka.vercel.app/graphql",
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
