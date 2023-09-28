import React, { useState } from 'react'
import { getDiscontProductsAction } from '../../../store/reducers/allProductsReducer'
import { useDispatch } from 'react-redux'

export default function DiscontForm() {
  const dispatch = useDispatch();

  const [ checkboxChecked, setCheckboxChecked ] = useState(false);

  const handleChange = () => setCheckboxChecked(!checkboxChecked);

  const get_discont = e => dispatch(getDiscontProductsAction(e.target.checked));

  return (
    <div>
      <label>
        <p>items with discount</p>
        <input type="checkbox" checked={checkboxChecked} onChange={handleChange} onClick={get_discont}/>
      </label>
    </div>
  )
}
