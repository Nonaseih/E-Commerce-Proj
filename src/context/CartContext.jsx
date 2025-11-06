/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 28/10/2025 - 03:12:37
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * @description      : Centralized Cart State Management
 * @author           : fortu
 * @version          : 1.2.0
 * @date             : 27/10/2025
 */

import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "ns_kicks_cart_v1";

// --- Utils ---
const parsePrice = (value) => {
  const n = typeof value === "number" ? value : parseFloat(value);
  return Number.isFinite(n) ? n : 0;
};

const cartTotal = (items = []) =>
  items.reduce((sum, it) => sum + parsePrice(it.price) * it.qty, 0);

const initialState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const items = (parsed.items || []).map((it) => ({
        ...it,
        qty: Math.max(1, parseInt(it.qty, 10) || 1),
        price: parsePrice(it.price),
      }));
      return { items, createdAt: parsed.createdAt || Date.now() };
    }
  } catch {
    // ignore corrupt localStorage
  }
  return { items: [], createdAt: Date.now() };
};

// --- Reducer ---
function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, qty = 1 } = action.payload;
      const price = parsePrice(product.price);
      const existing = state.items.find((i) => String(i.id) === String(product.id));

      let newItems;
      if (existing) {
        newItems = state.items.map((i) =>
          String(i.id) === String(product.id)
            ? { ...i, qty: i.qty + qty }
            : i
        );
      } else {
        newItems = [
          ...state.items,
          {
            id: product.id,
            title: product.title,
            price,
            img: product.img,
            qty: Math.max(1, qty),
          },
        ];
      }
      return { ...state, items: newItems };
    }

    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((i) => String(i.id) !== String(action.payload.id)),
      };

    case "UPDATE_QTY": {
      const { id, qty } = action.payload;
      if (qty < 1) return state;
      const newItems = state.items.map((i) =>
        String(i.id) === String(id) ? { ...i, qty } : i
      );
      return { ...state, items: newItems };
    }

    case "CLEAR":
      return { ...state, items: [] };

    default:
      return state;
  }
}

// --- Provider ---
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, null, initialState);

  useEffect(() => {
    const payload = {
      items: state.items,
      createdAt: state.createdAt || Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [state.items, state.createdAt]);

  const addToCart = (product, qty = 1) =>
    dispatch({ type: "ADD", payload: { product, qty } });
  const removeFromCart = (id) =>
    dispatch({ type: "REMOVE", payload: { id } });
  const updateQty = (id, qty) =>
    dispatch({ type: "UPDATE_QTY", payload: { id, qty } });
  const clearCart = () => dispatch({ type: "CLEAR" });

  const total = cartTotal(state.items);
  const itemCount = state.items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items: state.items, addToCart, removeFromCart, updateQty, clearCart, total, itemCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
