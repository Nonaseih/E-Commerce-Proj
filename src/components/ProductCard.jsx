/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 11/11/2025 - 13:18:58
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import React from "react";
import PropTypes from "prop-types";
import { useCart } from "../context/CartContext";
import "./styles/ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

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
          onClick={() => navigate(`/shop/${id}`)}  // ✅ Quick View on image
        />
      </figure>

      <section className="product-card__content">
        <header className="product-card__header">
          <h3 id={`product-${id}`} className="product-card__title">
            {title}
          </h3>
          <p className="product-card__meta">
            ${price} • ⭐ {rating}
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

          <div className="product-card__actions">
            <button
              className="quickview-btn"
              onClick={() => navigate(`/shop/${id}`)}  
            >
              Quick View
            </button>

            <button
              className="product-card__button"
              aria-label={`Add ${title} to cart`}
              type="button"
              onClick={() => addToCart(product, 1)}
            >
              Add
            </button>
          </div>
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
