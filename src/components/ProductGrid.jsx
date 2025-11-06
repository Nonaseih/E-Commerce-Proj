/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 22/10/2025 - 11:27:49
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/components/ProductGrid.jsx
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products = [] }) {
  return (
    <section className="product-grid" aria-label="Product grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  );
}
