import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../requests/getProducts";
import s from "./SingleProduct.module.css";
import { addToCartAction } from "../../store/reducers/cartReducer";

export default function SingleProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => dispatch(getSingleProduct(id)), []);
  const singleProductState = useSelector((store) => store.singleProduct);
  console.log(singleProductState);
  const { title, price, description, image, categoryId } = singleProductState;
  const link = `http://localhost:3333${image}`;

  return (
    <div className={s.singleProduct}>
      <div className={s.details}>
        
        <div className={s.bigImg}>
        <img src={link} alt={title} />
        </div>
     
     <div className={s.box}>
      <div className={s.row}>
      <h2>{title}</h2>
      <span>${price}</span>
      </div>
    
    
     <p>{description}</p>
    
     
     <button className={s.cart} onClick={()=>dispatch(addToCartAction({id,title,description,price,image}))}>Add to cart</button>
     </div>
      </div>
    </div>
  );
}
