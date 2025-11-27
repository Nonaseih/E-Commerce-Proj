/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 28/10/2025 - 03:12:54
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * @description      : Full Cart Page (Luxury Theme)
 * @author           : fortu
 * @version          : 1.0.0
 */

import React from "react";
import { useCart } from "../context/CartContext";
import { useSelector } from "react-redux";
import "../styles/Cart.css";

const CartPage = () => {
  const { items, updateQty, removeFromCart, total, clearCart } = useCart();
  const name= useSelector ((state)=>(state.name.name))

  if (!items.length)
    return <div className="cart-empty luxury">Your cart is empty.</div>;
  <h1>your name is {name}</h1>

  return (
    <section className="cart-page luxury">
      <h1 className="cart-title">Your Cart</h1>
      <div className="cart-container">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.title} className="cart-item-img" />

            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p className="price">₦{parseFloat(item.price).toFixed(2)}</p>

              <div className="qty-control">
                <button
                  onClick={() => updateQty(item.id, item.qty - 1)}
                  disabled={item.qty <= 1}
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
              </div>

              <p className="subtotal">
                Subtotal: ₦{(item.price * item.qty).toFixed(2)}
              </p>

              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ₦{total.toFixed(2)}</h2>
        <div className="cart-actions">
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
          <button
            className="checkout-btn"
            onClick={() => (window.location.href = "/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
