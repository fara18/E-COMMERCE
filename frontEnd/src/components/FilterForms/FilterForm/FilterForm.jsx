import React from 'react'
import { useDispatch } from 'react-redux'
import { filterProductsAction } from '../../../store/reducers/allProductsReducer'

export default function FilterForm() {
  const dispatch = useDispatch()
  const submit =e =>{
    e.preventDefault()
    const {min,max} = e.target
    const minValue = min.value || 0;
    const maxValue = max.value || Infinity;
    dispatch(filterProductsAction({minValue,maxValue}))
  }
  return (
    <form onSubmit={submit}>
      <input type="number" placeholder='min' name='min' />
      <input type="number" placeholder='max' name='max' />
      <button>submit </button>
    </form>
  )
}
