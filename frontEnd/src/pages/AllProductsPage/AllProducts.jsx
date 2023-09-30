import React from "react";
import { useSelector } from "react-redux";
import ProductContainer from "../../components/Products/Container/ProductContainer";
import s from "./AllProducts.module.css";
import FIlterForms from "../../components/FilterForms/FIlterForms";
export default function AllProducts() {
  const allProductsState = useSelector((store) => store.allProducts);
  console.log(allProductsState);
  return (
    <div>
      <FIlterForms />

      <ProductContainer state={allProductsState} />
    </div>
  );
}
