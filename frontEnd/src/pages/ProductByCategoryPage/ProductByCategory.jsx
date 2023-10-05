import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductContainer from "../../components/Products/Container/ProductContainer";
import { getProductsByCategory } from "../../requests/getProducts";
import FIlterForms from "../../components/FilterForms/FIlterForms";

export default function ProductByCategory({title}) {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => dispatch(getProductsByCategory(id)), []);

  const category_state = useSelector((store) => store.productsByCategory);

  console.log(category_state);

  return (
    <div>

      <FIlterForms />
      <ProductContainer state={category_state} title={title} />
    </div>
  );
}
