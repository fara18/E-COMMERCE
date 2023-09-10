import React from 'react'
import Item from '../Item/Item'

export default function Container({state}) {
  return (
    <div>
      {
         state.map(el=> <Item key={el.id} {...el} />)
      }
    </div>
  )
}
