/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 28/10/2025 - 10:59:10
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * @description      : Main App with routing
 * @author           : fortu
 * @version          : 1.1.0
 * @date             : 27/10/2025
 */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import State from "./pages/State";
import Checkout from "./pages/Checkout";

import "./App.css";
import ShoeDetails from "./pages/ShoeDetails";
export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ShoeDetails/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/state" element={<State />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
    </div>
  );
}
