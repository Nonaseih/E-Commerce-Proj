/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 23/10/2025 - 23:47:01
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="main-header">
      <h1 className="logo">NonaSieh Kicks</h1>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/state">State</Link>
      </nav>
    </header>
  );
}
