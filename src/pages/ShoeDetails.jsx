/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 13:42:47
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import React from "react";
import Products from "../data/products";
import { useParams, useNavigate } from "react-router-dom";

import "../pages/styles/ShoeDetails.css";

const ShoeDetails = () => {
    const navigate= useNavigate();
  const { id } = useParams();
  const prod = Products.find((product) => product.id === parseInt(id));

  if (!prod) return <p>Product Not Found!!!!</p>;

  return (
    <div className="shoe-details">
      <h1>{prod.title}</h1>
      <img src={prod.img} alt={prod.title} />
      <p>{prod.desc}</p>
      <p className="price">${prod.price}</p>
      <p className="rating">{prod.rating} stars</p>
     <button onClick={()=>navigate(-1)}>Back To Shop</button>
    </div>
  );
};

export default ShoeDetails;
