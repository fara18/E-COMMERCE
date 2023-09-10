import React from 'react'
import s from './Item.module.css'
import {Link} from 'react-router-dom'
export default function Item({id,title,image}) {
  return (
    <Link to={`/categories/${id}`}>
    <div>
      <img src={`http://localhost:3333${image}`} alt={title}/>
      <p>{title}</p>
    </div>
    </Link>
  )
}
