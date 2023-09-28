export const LOAD_PRODUCT_BY_CATEGORY = 'LOAD_PRODUCT_BY_CATEGORY'

export const loadProductByCategory = payload => ({ type: LOAD_PRODUCT_BY_CATEGORY, payload })

export const productsByCategoriesReducer = (state = [], action) => {
    if (action.type === LOAD_PRODUCT_BY_CATEGORY) {
        return action.payload.map(el => ({ ...el, showProduct: true }))
    } else {
        return state; 
    }
}










