import React from 'react'
import { useDispatch } from 'react-redux'
import { filterProductsAction } from '../../../store/reducers/allProductsReducer'
import { filterProductsByCategoryAction } from '../../../store/reducers/productsByCategoriesReducer'
import s from'./FilterForm.module.css'
export default function FilterForm() {
  const dispatch = useDispatch()
  
  const submit =e =>{
    e.preventDefault()
    console.log(123);
    const {min,max} = e.target
    const minValue = min.value || 0;
    const maxValue = max.value || Infinity;
    dispatch(filterProductsAction({minValue,maxValue}))
    dispatch(filterProductsByCategoryAction({minValue,maxValue}))
  }
  
  return (
    <form className={s.filterContainer} onSubmit={submit}>
      <div className={s.filterWrapper}>
      <p>Price</p>
      <input type="number" placeholder='From' name='min' />
      <input type="number" placeholder='To' name='max' />
      <button>Search</button>
      </div>
    </form>
  )
}
