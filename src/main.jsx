import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ContextProvider from "./Features/ContextProvider.jsx";

// use context api and pass App as a children to access all page
ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
