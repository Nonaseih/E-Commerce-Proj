/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 27/10/2025 - 18:11:18
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
