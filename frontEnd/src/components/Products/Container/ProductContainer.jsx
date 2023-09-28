import React from "react";
import ProductsItem from "../Item/ProductsItem";
import s from "./ProductContainer.module.css";
export default function ProductContainer({ state }) {
  return (

    <div className={s.product}>
      {state &&
        state
          .filter((el) => el.showProduct)
          .map((el) => <ProductsItem key={el.id} {...el} />)}
    </div>
    
  );
}
