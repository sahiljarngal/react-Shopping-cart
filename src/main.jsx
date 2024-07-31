import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ContextProvider from "./Features/ContextProvider.jsx";
import { HashRouter } from "react-router-dom";
// use context api and pass App as a children to access all page
ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </HashRouter>
);
