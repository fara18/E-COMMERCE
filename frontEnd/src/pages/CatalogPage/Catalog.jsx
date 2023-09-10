import React from 'react'
import { getAllCategories } from '../../requests/getAllCategories'
import {useDispatch} from 'react-redux'
import Container from '../../components/Catalog/Container/Container'
export default function Catalog() {

  
  return (
    <div>
      <h3>Categories</h3>
    <Container />
    </div>
  )
}
