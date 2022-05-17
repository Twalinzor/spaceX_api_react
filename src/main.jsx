import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>
);
