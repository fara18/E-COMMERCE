import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCartAction } from "../../../store/reducers/cartReducer";
import s from "./ProductsItem.module.css";
export default function Item({ id, title, image, price, discont_price,description }) {
  const dispatch = useDispatch();


  return (

    <div className={s.product}>
    <div className={s.card}>
      <Link to={`/products/${id}`}>
        <img src={`http://localhost:3333${image}`} alt={title} />
      </Link>
      <div className={s.content}>
        <h3>
          <Link to={`/products/${id}`}>{title}</Link>
        </h3>
        <span>${price}</span>
        <p>{description}</p>
        <button className={s.add_btn} onClick={()=>dispatch(addToCartAction({id,title,image,price,discont_price,description}))}>Add to cart</button> 
      </div>
    </div>
    </div>

  );
}

