/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 11/11/2025 - 13:11:31
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import React from "react";
import Products from "../data/products";
import { useParams, useNavigate } from "react-router-dom";

import "../pages/styles/ShoeDetails.css";

const ShoeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const prod = Products.find((product) => product.id === parseInt(id));

  if (!prod) return <p className="not-found">Product Not Found.</p>;

  return (
    <div className="shoe-details-container">
      <div className="details-left">
        <img className="details-img" src={prod.img} alt={prod.title} />

        <div className="thumbs">
          <img src={prod.img1} alt="thumb1" />
          <img src={prod.img2} alt="thumb2" />
          <img src={prod.img3} alt="thumb3" />
        </div>
      </div>

      <div className="details-right">
        <h1 className="details-title">{prod.title}</h1>
        <p className="details-price">${prod.price}</p>
        <p className="details-rating">{prod.rating} ★</p>

        <p className="details-desc">{prod.desc}</p>

        <div className="extra-info">
          <h3>About This Sneaker</h3>
          <p>
            Built with premium materials and engineered for maximum comfort and durability.  
            Perfect for streetwear, performance, or daily style.  
            This silhouette remains one of the most iconic pieces in sneaker culture.
          </p>
        </div>

        <div className="spec-section">
          <h3>Specifications</h3>
          <ul>
            <li>Material: Premium leather & synthetic mesh</li>
            <li>Midsole cushioning for impact control</li>
            <li>Durable outsole traction pattern</li>
            <li>Breathable interior lining</li>
            <li>True-to-size fit</li>
          </ul>
        </div>

        <button className="back-btn" onClick={() => navigate(-1)}>
          Back To Shop
        </button>
      </div>
    </div>
  );
};

export default ShoeDetails;
