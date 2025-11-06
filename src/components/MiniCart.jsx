/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 27/10/2025 - 19:31:45
    * 
    * MODIFICATION LOG
    * - Version         : 1.1.1
    * - Date            : 27/10/2025
    * - Author          : fortu
    * - Modification    : Added navigation for “View Full Cart” button
**/

/**
 * @description : Animated MiniCart with fade-slide using Framer Motion
 * @author      : fortu
 * @version     : 1.1.1
 */

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./styles/MiniCart.css";

const MiniCart = ({ onClose }) => {
  const { items, removeFromCart } = useCart();
  const hasItems = items && items.length > 0;
  const navigate = useNavigate();

  const handleViewCart = () => {
    if (onClose) onClose();
    navigate("/cart");
  };

  return (
    <AnimatePresence>
      <motion.div
        key="minicart"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="mini-cart luxury"
      >
        <div className="mini-cart-header">
          <h4>Your Cart</h4>
          <button className="close-btn" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        {hasItems ? (
          <ul className="mini-cart-items">
            {items.map((item) => (
              <li key={item.id} className="mini-cart-item">
                <img src={item.img} alt={item.title} />
                <div className="mini-cart-info">
                  <span className="mini-cart-title">{item.title}</span>
                  <span className="mini-cart-price">${item.price}</span>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mini-cart-empty">Your cart is empty.</p>
        )}

        {hasItems && (
          <div className="mini-cart-footer">
            <button className="view-cart-btn" onClick={handleViewCart}>
              View Full Cart
            </button>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default MiniCart;
