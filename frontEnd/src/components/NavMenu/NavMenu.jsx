import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NavMenu.module.css'
export default function NavMenu() {
  return (
    <div>
      
      <NavLink to='/catalog'>Catalog</NavLink>
      <NavLink to='/'>Main Page</NavLink>
      <NavLink to='/allProducts'>All Products</NavLink>
      <NavLink to='/allSales'>All sales</NavLink>
      <NavLink to='/cart'><i class="fa-solid fa-basket-shopping"></i></NavLink>
      
    </div>
  )
}
