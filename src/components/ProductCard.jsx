/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 27/10/2025 - 19:02:58
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * ProductCard Component
 * @description Displays individual product details with image, info, and CTA.
 * @version 2.0.0
 * @author fortu
 * @created 2025-10-26
 */

import React from "react";
import PropTypes from "prop-types";
import { useCart } from "../context/CartContext";
import "./styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // ✅ moved inside component

  if (!product) return null;

  const { id, img, title, price, rating, description, tags = [] } = product;

  return (
    <article className="product-card" aria-labelledby={`product-${id}`}>
      <figure className="product-card__media">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="product-card__image"
        />
      </figure>

      <section className="product-card__content">
        <header className="product-card__header">
          <h3 id={`product-${id}`} className="product-card__title">
            {title}
          </h3>
          <p className="product-card__meta">
            ${price} &nbsp;•&nbsp; ⭐ {rating}
          </p>
        </header>

        {description && (
          <p className="product-card__description">{description}</p>
        )}

        <footer className="product-card__footer">
          {tags.length > 0 && (
            <ul className="product-card__tags" aria-label="Product tags">
              {tags.map((tag) => (
                <li key={`${tag}-${id}`} className="product-card__tag">
                  {tag}
                </li>
              ))}
            </ul>
          )}

          <button
            className="product-card__button"
            aria-label={`Add ${title} to cart`}
            type="button"
            onClick={() => addToCart(product, 1)} // ✅ fixed
          >
            Add
          </button>
        </footer>
      </section>
    </article>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ProductCard;
