import { loadAllProductsAction } from "../store/reducers/allProductsReducer"
import { loadProductByCategory } from "../store/reducers/productsByCategoriesReducer"
import { loadSingleProductAction } from "../store/reducers/singleProductReducer"

export const getAllProducts = (dispatch) => {
    fetch(`http://localhost:3333/products/all`)
    .then(res => res.json())
.then(json=> dispatch(loadAllProductsAction(json)))
}


export const getProductsByCategory = id => {
    return dispatch =>{
        fetch(`http://localhost:3333/categories/${id}`)
        .then(res=>res.json())
        .then(json => dispatch(loadProductByCategory(json.data)))
    }
}

export const getSingleProduct = id => {
    return dispatch => {
        fetch(`http://localhost:3333/products/${id}`)
        .then(res=>res.json())
        .then(json => dispatch(loadSingleProductAction(json[0])))
    }
}

export const adNewProduct =(newProduct)=>{
    fetch('http://localhost:3333/sale/send',{
        method:'POST',
        body:JSON.stringify(newProduct)
    })
    .then(res=>res.json())
    .then(json=> console.log(json,'You got 5% discount on your next purchase'))
}