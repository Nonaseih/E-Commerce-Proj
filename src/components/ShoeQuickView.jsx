/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 11/11/2025 - 13:15:35
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import React from "react";
import "./styles/ShoeQuickView.css";

const ShoeQuickView = ({ product, close }) => {
  if (!product) return null;

  return (
    <div className="quickview-overlay" onClick={close}>
      <div className="quickview-modal" onClick={(e) => e.stopPropagation()}>
        
        <div className="quickview-left">
          <img src={product.img} alt={product.title} className="quickview-img" />
        </div>

        <div className="quickview-right">
          <h2>{product.title}</h2>
          <p className="price">${product.price}</p>
          <p className="rating">⭐ {product.rating}</p>

          <p className="desc">{product.desc}</p>

          <div className="extra-info">
            <h4>About</h4>
            <p>
              Premium build quality with cushioning, traction, and style that fits daily wear, performance, or pure flex.
            </p>
          </div>

          <button className="close-btn" onClick={close}>
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default ShoeQuickView;
