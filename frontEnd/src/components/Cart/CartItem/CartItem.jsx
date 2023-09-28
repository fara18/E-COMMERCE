import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementItemAction,
  deleteItemFromCartAction,
  incrementItemAction,
} from "../../../store/reducers/cartReducer";
import s from "./CartItem.module.css";
export default function CartItem({ id, title, image, price, count , description }) {
  const dispatch = useDispatch();
  return (
    
    <div className={s.details}>
    <div className={s.cart}>
      <img src={`http://localhost:3333${image}`} alt={title} />
      <div className={s.box}>
        <div className={s.row}>
          <h2>{title}</h2>
          <span>{price * count}$</span>
        </div>
        <p>{description}</p>
        <div className={s.amount}>
        <button className={s.count} onClick={()=>dispatch(decrementItemAction(id))}>-</button>
        <span>{count}</span>
        <button className={s.count}  onClick={()=> dispatch(incrementItemAction(id))}>+</button>
        </div>
      </div>
      <div className={s.delete}  onClick={()=>dispatch(deleteItemFromCartAction(id))}>X</div>

    </div>
    </div>
  );
}


