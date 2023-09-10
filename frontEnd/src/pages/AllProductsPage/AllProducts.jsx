import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../requests/getProducts";
import Container from "../../components/Products/Container/Container";

export default function AllProducts() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllProducts), []);
  const allProductsState = useSelector((store) => store.allProducts);

  return (
    <div>
      <Container state={allProductsState} />
    </div>
  );
}
