//! TRAIGO LA LIBRERIA DE REACT
import React from 'react';
//! TRAIGO LA LIBRERIA  DE REACT-DOM
import ReactDOM from 'react-dom/client';

//! Primer componente
// const App = () => "Hola Mundo con JSX"
// sin el "./" lo va a buscar dentro de la carpeta NODE MODULES
import App from "./App";

import "./estilos.css"

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

//! CREANDO UN PUNTO INIDIAL (root) EN DONDE LA APP SE VA A MONTAR (DIBUJAR)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
