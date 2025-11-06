/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 27/10/2025 - 19:31:30
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * @description : Elegant horizontal Navbar with scroll effect + MiniCart toggle
 * @author      : fortu
 * @version     : 1.2.0
 */

import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import MiniCart from "./MiniCart";
import "./styles/Navbar.css";

const LINKS = [
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "State", href: "/state" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const cartRef = useRef(null);
  const { itemCount } = useCart();

  const activePath = location.pathname;

  // scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close minicart on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          NSK
        </Link>

        <ul className="nav-links">
          {LINKS.map(({ name, href }) => (
            <li key={href}>
              <Link
                to={href}
                className={activePath === href ? "active" : ""}
                aria-current={activePath === href ? "page" : undefined}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Only show cart icon on /shop */}
        {activePath === "/shop" && (
          <div className="nav-cart" ref={cartRef}>
            <button
              className="cart-button"
              aria-label="Toggle cart"
              onClick={() => setOpen((prev) => !prev)}
            >
              <ShoppingCart size={22} />
              {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
            </button>

            {open && <MiniCart onClose={() => setOpen(false)} />}
          </div>
        )}
      </div>
    </nav>
  );
}
