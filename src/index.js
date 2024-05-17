import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Search from './Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode class="Search">
    <h1>Weather App</h1>
    <Search />
  </StrictMode>
);



