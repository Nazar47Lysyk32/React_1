import React from "react";
import ProductItem from "./Product-Item";

import hpPavilion14 from '../../images/hp-pavilion-14.png';
import asusTufGaming15 from '../../images/asus-tuf-gaming-15.png';
import acerAspire7 from '../../images/acer-aspire-7.png';

const ProductsList = () => {
  return (
    <div className="product-list">

      <ProductItem
        image={hpPavilion14}
        info="Ноутбук HP Laptop 14"
        price="26099₴"
        expire={true}
      />
      <ProductItem
        image={asusTufGaming15}
        info="Ноутбук ASUS TUF Gaming A15 (2023)"
        price="36999₴"
        expire={false}
      />
      <ProductItem
        image={acerAspire7}
        info="Ноутбук Acer Aspire 7"
        price="31999₴"
        expire={true}
      />
    </div>
  );
};

export default ProductsList;
