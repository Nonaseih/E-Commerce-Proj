/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 29/10/2025 - 11:04:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * @description : Contact Page with smooth reveal of info card
 * @author      : fortu
 * @created     : 29/10/2025
 */

import React, { useState } from "react";
import "../pages/styles/Contact.css";
import { EyeOff } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    message: "",
  });

  const [showInfo, setShowInfo] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFilled = Object.values(formData).every((val) => val.trim() !== "");
    if (allFilled) {
      setShowInfo(true);
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  return (
    <div className="contact-page dual-layout">
      {/* LEFT SIDE - INPUT FORM */}
      <div className="contact-box input-box">
        <h2 className="contact-title">Enter Your Info</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="eye-btn">
            Enter
          </button>
        </form>
      </div>

      {/* RIGHT SIDE - DISPLAY PANEL */}
      <div
        className={`contact-box display-box ${
          showInfo ? "slide-in" : "slide-hidden"
        }`}
      >
        {showInfo && (
          <>
            <h2 className="contact-title">Your Info</h2>

            <button className="eye-btn toggle-btn" onClick={() => setShowInfo(false)}>
              <EyeOff size={18} /> <span>Hide Info</span>
            </button>

            <div className="info-lines">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key} className="line reveal">
                  <strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {value}
                </div>
              ))}
            </div>

            <div className="contact-footer">
              © {new Date().getFullYear()} NonaSieh. All rights reserved.
            </div>
          </>
        )}
      </div>
    </div>
  );
}
