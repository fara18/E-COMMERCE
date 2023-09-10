import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { categoriesReducer } from './reducers/categoriesReducer'
import { productsByCategoriesReducer } from './reducers/productsByCategoriesReducer'
import { allProductsReducer } from './reducers/allProductsReducer'
import { singleProductReducer } from './reducers/singleProductReducer'
import { cartReducer } from './reducers/cartReducer'
const rootReducer = combineReducers({
    categories: categoriesReducer,
    productsByCategory: productsByCategoriesReducer,
    allProducts: allProductsReducer,
    singleProduct:singleProductReducer,
    cart:cartReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))