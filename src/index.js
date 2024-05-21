import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode class="App">
    <h1>Weather App</h1>
    <App />
            <p>open-source code on <a href="https://github.com/JulchenP/week-4">GitHub</a> by Julia Poeppelmann</p>

  </StrictMode>
);