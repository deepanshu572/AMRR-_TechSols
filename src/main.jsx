import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ItemProvider } from "./context/ItemContext.jsx";

createRoot(document.getElementById("root")).render(
  <ItemProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ItemProvider>
);
