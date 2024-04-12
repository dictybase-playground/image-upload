import { LogtoProvider, LogtoConfig, UserScope } from "@logto/react";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { Router, RouterProvider } from "react-router-dom";
import { config } from "./apolloConfig";
import { router } from "./routes";
import "./App.css";

const logtoConfig: LogtoConfig = {
  endpoint: import.meta.env.VITE_LOGTO_ENDPOINT,
  appId: import.meta.env.VITE_LOGTO_APPID,
  scopes: [
    UserScope.Profile,
    UserScope.Email,
    UserScope.Phone,
    UserScope.CustomData,
    UserScope.Identities,
    "write:content",
    "edit:content",
    "delete:content",
    "roles",
  ],
  resources: [
    import.meta.env.VITE_APP_LOGTO_API_FIRST_RESOURCE,
    import.meta.env.VITE_APP_LOGTO_API_SECOND_RESOURCE,
  ],
};

const client = new ApolloClient(config);

function App() {
  return (
    <LogtoProvider config={logtoConfig}>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </LogtoProvider>
  );
}

export default App;
