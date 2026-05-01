import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { App } from "./App";

const elem = document.getElementById("root")!;

if (import.meta.hot) {
  const root = import.meta.hot.data.root ?? createRoot(elem);
  import.meta.hot.data.root = root;
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  createRoot(elem).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
