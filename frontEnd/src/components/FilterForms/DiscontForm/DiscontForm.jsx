import React, { useState } from "react";
import { getDiscontProductsAction } from "../../../store/reducers/allProductsReducer";
import { useDispatch } from "react-redux";
import { getDiscontProductsByCategoryAction } from "../../../store/reducers/productsByCategoriesReducer";
import "./DiscontForm.css";
export default function DiscontForm() {
  const dispatch = useDispatch();

  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleChange = () => setCheckboxChecked(!checkboxChecked);

  const get_discont = (e) => {
    
    dispatch(getDiscontProductsAction(e.target.checked));

    dispatch(getDiscontProductsByCategoryAction(e.target.checked));
  
  };

  return (
    <div class="checkbox-wrapper-3">
      <div class="checkbox-container">
        <p>Editors choice</p>

        <input
          type="checkbox"
          checked={checkboxChecked}
          onChange={handleChange}
          onClick={get_discont}
          id="cbx-3"
        />

        <label for="cbx-3" class="toggle">
          <span></span>
        </label>
      </div>
    </div>
  );
}
