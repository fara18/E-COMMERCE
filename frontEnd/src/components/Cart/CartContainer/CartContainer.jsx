import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem/CartItem';
import { deleteAllItemsAction } from '../../../store/reducers/cartReducer';
import s from './CartContainer.module.css'
export default function CartContainer() {
    const cartState = useSelector(store => store.cart)
    console.log(cartState);
    const dispatch = useDispatch()
    const cart_total = cartState.reduce((acc,el)=>acc+el.price*el.count,0)

  return (
    <div>
      {
        cartState.map(el=><CartItem key={el.id}{...el} />)
      }
      <div onClick={()=>dispatch(deleteAllItemsAction())}>Clear cart</div>
     <div className={s.total}>
      <h3>Total:
        {
          cart_total
        }
      </h3>
      </div>
    </div>
  )
}

