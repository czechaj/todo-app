import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { TodoProvider } from "./contexts/TodoContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import "antd/dist/antd.min.css";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
    <ChakraProvider>
      <ThemeProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
      </ThemeProvider>
    </ChakraProvider>
);
