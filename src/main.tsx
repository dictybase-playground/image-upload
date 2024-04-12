import React from "react";
import { render } from "react-dom";
import App from "./App.tsx";
import "./index.css";

if (import.meta.env.MODE === "MUTATION_TEST") {
  import("./mutationTest.tsx");
} else {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root"),
  );
}
