/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 24/10/2025 - 02:24:42
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * @description : Sneaker Services Page
 * @author      : fortu
 * @created     : 24/10/2025
 */

import React from "react";
import "../pages/styles/Services.css";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
  FaArrowRight,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Worldwide Shipping",
      description:
        "Fast, secure delivery to over 100+ countries. Track your order in real-time.",
      icon: (
        <svg
          className="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M3 12h2l2 3h4l2-3h2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 8h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
        </svg>
      ),
      color: "#6b7280",
    },
    {
      title: "Authentic Sneakers Sales",
      description:
        "100% genuine sneakers from top brands. Verified authenticity guaranteed.",
      icon: (
        <svg
          className="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M9 12l2 2 4-4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 6H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      color: "#9ca3af",
    },
    {
      title: "Custom Sneaker Orders",
      description:
        "Design your dream pair. Fully customizable colors, materials & details.",
      icon: (
        <svg
          className="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M15 12a3 3 0 1 0-6 0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2v2m0 16v2m8-10h2M4 12H2m15.364 6.364l1.414 1.414M6.222 6.222L4.808 4.808m0 12.728l1.414 1.414M19.192 7.636l1.414-1.414"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      color: "#6b7280",
    },
    {
      title: "Exclusive Member Discounts",
      description:
        "Join our VIP club for up to 30% off, early drops & limited editions.",
      icon: (
        <svg
          className="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l2 2 4-4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      color: "#4b5563",
    },
  ];

  return (
    <section className="services-page">
      <div className="container">
        <header className="header">
          <h1>
            Our <span className="mono-text">Services</span>
          </h1>
          <p className="subtitle">
            Premium sneaker experiences crafted for collectors, creators, and
            enthusiasts worldwide.
          </p>
        </header>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ "--delay": `${index * 100}ms`, "--color": service.color }}
            >
              <div className="icon-wrapper">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="learn-more">
                Learn more
                <svg
                  className="arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <footer className="trust-badges">
          <span>
            <svg className="check" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            30-day money-back guarantee

            <svg className="check" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Certified authentic products
          </span>
        </footer>
      </div>
    </section>
  );
}
