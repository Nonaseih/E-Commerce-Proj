/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 23/10/2025 - 23:38:23
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * @description      : User State Page with toggle + update functionality
 * @author           : Nona
 * @created          : 23/10/2025 - 23:59:00
 * @version          : 1.2.0
 */

import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
  FaArrowRight,
} from "react-icons/fa";

export default function State() {
  const [user, setUser] = useState({
    name: "Anon",
    age: 9,
    email: "nona.sieh@gmail.com",
    address: "24 Obanyan Street",
  });

  const [visible, setVisible] = useState(false);

  const handleUpdate = () => {
    setUser({
      name: "Nona",
      age: 18,
      email: "anon001@.com",
      address: "42 Galaxy Road",
    });
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <h3>Assignment</h3>
        <hr />
      </header>

      <div className="state-container">
        <button
          className="toggle-btn"
          onClick={() => setVisible((prev) => !prev)}
        >
          {visible ? "Hide Info" : "Show Info"}
        </button>

        {visible && (
          <div className="state-info">
            <h2>Hello, {user.name} 👋</h2>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Address:</strong> {user.address}</p>

            <button className="update-btn" onClick={handleUpdate}>
              Update Info
            </button>
          </div>
        )}
      </div>

      <footer className="page-footer">
        <p>© {new Date().getFullYear()} NonaSieh. All rights reserved.</p>
      </footer>
    </div>
  );
}
