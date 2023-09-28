import React from 'react'
import {useDispatch} from 'react-redux'
import { sortProductsAction } from '../../../store/reducers/allProductsReducer'
export default function SortForm() {
    const dispatch = useDispatch()
    const sort = e => dispatch(sortProductsAction(e.target.value))
  return (
    <div>
      <label>
        <p>Sort</p>
        <select onInput={sort}>
        <option value='default'>By default</option>
            <option value="title">By A-Z</option>
            <option value="priceAsc">By price asc</option>
            <option value="priceDesc">By price desc</option>
            <option value="rating">By most popular</option>
        </select>
      </label>
    </div>
  )
}
