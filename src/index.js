import React from "react" //Codigo para importar la biblioteca
import ReactDOM  from "react-dom/client";// Para importar la bibliteca de react escritorio (web)
import App from './App.js';


const root = ReactDOM.createRoot( document.getElementById('root')
)
  root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  )
 