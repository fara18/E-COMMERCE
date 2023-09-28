import React from 'react'
import ProductContainer from '../Products/Container/ProductContainer'
import {useSelector } from 'react-redux'


export default function SaleSection() {
  const allProducts = useSelector(store=>store.allProducts)
  const discont_products=allProducts.filter(el=>el.discont_price !== null)
console.log(discont_products);
  return (
    <div>
      <h1>SALE</h1>
      <ProductContainer state={discont_products} />
  
    </div>
  )
}
