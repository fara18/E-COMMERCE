import { loadAllProductsAction } from "../store/reducers/allProductsReducer"
import { loadProductByCategory } from "../store/reducers/productsByCategoriesReducer"
import { loadSingleProductAction } from "../store/reducers/singleProductReducer"
import { serverLink } from "./constans"

export const getAllProducts = (dispatch) => {
    fetch(`${serverLink}/products/all`)
    .then(res => res.json())
.then(json=> dispatch(loadAllProductsAction(json)))
}


export const getProductsByCategory = id => {
    return dispatch =>{
        fetch(`${serverLink}/categories/${id}`)
        .then(res=>res.json())
        .then(json => dispatch(loadProductByCategory(json.data)))
    }
}

export const getSingleProduct = id => {
    return dispatch => {
        fetch(`${serverLink}/products/${id}`)
        .then(res=>res.json())
        .then(json => dispatch(loadSingleProductAction(json[0])))
    }
}

export const adNewProduct =(newProduct)=>{
    fetch(`${serverLink}/sale/send`,{
        method:'POST',
        body:JSON.stringify(newProduct)
    })
    .then(res=>res.json())
    .then(json=> console.log(json,'You got 5% discount on your next purchase'))
}