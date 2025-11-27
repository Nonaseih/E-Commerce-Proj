/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 27/10/2025 - 19:50:12
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * @description : Full Cart Page — minimalist luxury layout
 * @author      : fortu
 * @version     : 1.0.0
 */

import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles/Cart.css";


const Cart = () => {
  const { items, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = items.reduce((sum, item) => sum + item.price, 0);
  

  if (items.length === 0) {
    return (
      <section className="cart-page luxury">
        <div className="cart-empty">
          <h2>Your Cart is Empty</h2>

          
          <button onClick={() => navigate("/shop")} className="shop-btn">
            Back to Shop
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page luxury">
      <h1 className="cart-title">Your Cart</h1>

      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.img} alt={item.title} className="cart-img" />
            <div className="cart-info">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
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

      <div className="cart-summary">
        <div className="cart-total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="cart-actions">
          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
          <button
  className="checkout-btn"
  onClick={() => navigate("/checkout")}
>
  Checkout
</button>

        </div>
      </div>
    </section>
  );
};

export default Cart;
