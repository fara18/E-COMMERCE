import React from "react";
import { useSelector } from "react-redux";
import ProductContainer from "../../components/Products/Container/ProductContainer";
import SortForm from "../../components/FilterForms/SortForm/SortForm";
import FilterForm from "../../components/FilterForms/FilterForm/FilterForm";
import DiscontForm from "../../components/FilterForms/DiscontForm/DiscontForm";
import s from './AllProducts.module.css'
export default function AllProducts() {
  
  const allProductsState = useSelector((store) => store.allProducts);
console.log(allProductsState);
  return (
    <div>
    
      <FilterForm />
      <SortForm />
      <DiscontForm />
      <ProductContainer state={allProductsState}  />
     
    </div>
  );
}
