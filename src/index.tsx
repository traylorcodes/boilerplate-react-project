import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ExampleComponent from './components/ExampleComponent/ExampleComponent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/*make your first component and throw it in here */}
    <link rel="stylesheet" href="https://js.arcgis.com/4.28/esri/themes/dark/main.css"></link>
    <ExampleComponent></ExampleComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
