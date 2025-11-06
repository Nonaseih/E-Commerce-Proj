/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 28/10/2025 - 03:39:52
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * @description      : Checkout Page (Luxury Minimalist Theme)
 * @author           : fortu
 * @version          : 1.0.0
 */

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./styles/Checkout.css";

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    clearCart();
  };

  if (!items.length && !submitted) {
    return (
      <div className="checkout-empty luxury">
        <h2>Your cart is empty.</h2>
        <button onClick={() => (window.location.href = "/shop")}>Go to Shop</button>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="checkout-success luxury">
        <h2>Order Confirmed</h2>
        <p>Thank you, {form.name}. Your order has been received.</p>
        <p className="muted">We’ll contact you shortly for delivery.</p>
        <button onClick={() => (window.location.href = "/")}>Return Home</button>
      </div>
    );
  }

  return (
    <section className="checkout luxury">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-grid">
        {/* Left: Form */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Billing Details</h2>

          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+234 000 000 0000"
            />
          </div>

          <div className="form-group">
            <label>Delivery Address *</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Street, City, State"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Place Order
          </button>
        </form>

        {/* Right: Order Summary */}
        <div className="checkout-summary">
          <h2>Order Summary</h2>
          <div className="summary-items">
            {items.map((item) => (
              <div key={item.id} className="summary-item">
                <span>
                  {item.title} × {item.qty}
                </span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="summary-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
