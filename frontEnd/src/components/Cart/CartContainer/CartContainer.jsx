import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem/CartItem';
export default function CartContainer() {
    const cartState = useSelector(store => store.cart)
    console.log(cartState);
  return (
    <div>
      {
        cartState.map(el=><CartItem key={el.id}{...el} />)
      }
    </div>
  )
}
