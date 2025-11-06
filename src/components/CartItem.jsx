/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 27/10/2025 - 16:49:32
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/components/CartItem.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import "./styles/CartItem.css";

export default function CartItem({ item }) {

  const { updateQty, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.img} alt={item.title} className="cart-item__img" />
      <div className="cart-item__body">
        <h4 className="cart-item__title">{item.title}</h4>
        <div className="cart-item__price">₦{item.price.toFixed(2)}</div>
        <p className="cart-item__subtotal">Subtotal: ₦{(item.price * item.qty).toFixed(2)}</p>
        <div className="cart-item__controls">
          <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease">−</button>
          <input
            aria-label="Quantity"
            value={item.qty}
            onChange={(e) => {
              const v = parseInt(e.target.value, 10) || 1;
              updateQty(item.id, v);
            }}
            type="number"
            min="1"
            className="cart-item__qty"
          />
          <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase">+</button>

          <button className="cart-item__remove" onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

