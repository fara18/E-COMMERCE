import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCartAction } from '../../../store/reducers/cartReducer'

export default function Item({id,title,image,price}) {
  const dispatch = useDispatch()
  return (
    <div>
      <Link to={`/products/${id}`}>
      <img src={`http://localhost:3333${image}`} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>

    </Link>
      <span onClick={()=>dispatch(addToCartAction({id,title,image,price}))}><i class="fa-solid fa-cart-plus"></i></span>
    
    </div>
  )
}
