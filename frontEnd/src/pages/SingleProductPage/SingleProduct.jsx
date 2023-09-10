import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../requests/getProducts";

export default function SingleProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => dispatch(getSingleProduct(id)), []);
  const singleProductState = useSelector((store) => store.singleProduct);
  console.log(singleProductState);
  const { title, price, description, image, categoryId } = singleProductState;
  const link = `http://localhost:3333${image}`;

  return (
    <div>
      <img src={link} alt={title} />
      <div>
        <p>{title}</p>
        <p>Description: {description}</p>
        <p>Price: {price}$</p>
      </div>
    </div>
  );
}
