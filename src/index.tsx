import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ExampleComponent from './components/ExampleComponent/ExampleComponent';
import { setAssetPath } from "@esri/calcite-components/dist/components";
setAssetPath("https://js.arcgis.com/calcite-components/2.2.0/assets");
document.body.classList.toggle('calcite-mode-dark');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://js.arcgis.com/4.28/esri/themes/dark/main.css"></link>
    {/*make your first component and throw it in here */}
    <ExampleComponent></ExampleComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
