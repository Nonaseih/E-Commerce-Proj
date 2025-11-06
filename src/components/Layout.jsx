/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 23/10/2025 - 23:47:46
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  );
}
