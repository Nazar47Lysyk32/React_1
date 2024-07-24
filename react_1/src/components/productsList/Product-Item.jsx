import React from "react";
import './Products-List.scss';

const ProductItem = ({ image, info, price, expire }) => {
  return (
    <ul className="product">
      <li className="product__image">
        <img src={image} alt="product-image" />
      </li>
      <li className="product__info">{info}</li>
      <li className="product__expire">{expire ? "Expires" : ""}</li>
      <li className="product__price">{price}</li>
    </ul>
  );
};

export default ProductItem;
