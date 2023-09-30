import React from 'react'
import ProductContainer from '../Products/Container/ProductContainer'
import {useSelector } from 'react-redux'
import s from './SaleSection.module.css'
import FilterForm from '../FilterForms/FilterForm/FilterForm'
import SortForm from '../FilterForms/SortForm/SortForm'
export default function SaleSection() {
  const allProducts = useSelector(store=>store.allProducts)
  const discont_products=allProducts.filter(el=>el.discont_price !== null)
console.log(discont_products);
  return (
    <div>
      <FilterForm />
      <SortForm />
      <ProductContainer state={discont_products} />
  
    </div>
  )
}
