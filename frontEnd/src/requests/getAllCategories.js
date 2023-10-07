import { loadAllCategoriesAction } from "../store/reducers/categoriesReducer"
import { serverLink } from "./constans"

export const getAllCategories =dispatch =>{
    fetch(`${serverLink}/categories/all`)
    .then(res=>res.json())
    .then(json=>dispatch(loadAllCategoriesAction(json)))
} 




