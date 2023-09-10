import React, { useEffect } from 'react'
import s from './Container.module.css'
import {useDispatch,useSelector} from 'react-redux'
import { getAllCategories } from '../../../requests/getAllCategories'
import Item from '../Item/Item'
export default function Container() {
    const dispatch = useDispatch()

    useEffect(()=> dispatch(getAllCategories),[])

    const categories_state = useSelector(store=>store.categories)
 
  return (
    <div>
      <div>
        {
            categories_state.map(el=> <Item key={el.id} category={el} {...el} />)
        }
      </div>
    </div>
  )
}
