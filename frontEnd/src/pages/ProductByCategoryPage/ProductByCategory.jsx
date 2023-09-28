import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductContainer from "../../components/Products/Container/ProductContainer";
import { getProductsByCategory } from "../../requests/getProducts";

export default function ProductByCategory() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => dispatch(getProductsByCategory(id)), []);

  const category_state = useSelector((store) => store.productsByCategory);

  console.log(category_state);

  return (
    <div>
  
     
      <ProductContainer state={category_state} />
    </div>
  );
}
