const LOAD_PRODUCT_BY_CATEGORY = 'LOAD_PRODUCT_BY_CATEGORY'
const SORT_PRODUCTS_BY_CATEGORY = "SORT_PRODUCTS_BY_CATEGORY"
const FILTER_PRODUCTS_BY_CATEGORY = "FILTER_PRODUCTS_BY_CATEGORY"
const GET_DISCONT_PRODUCTS_BY_CATEGORY = 'GET_DISCONT_PRODUCTS_BY_CATEGORY';

export const loadProductByCategory = payload => ({ type: LOAD_PRODUCT_BY_CATEGORY, payload })
export const sortProductsByCategoryAction = payload => ({ type: SORT_PRODUCTS_BY_CATEGORY, payload })
export const filterProductsByCategoryAction = payload => ({ type: FILTER_PRODUCTS_BY_CATEGORY, payload })
export const getDiscontProductsByCategoryAction = payload => ({ type: GET_DISCONT_PRODUCTS_BY_CATEGORY, payload });

export const productsByCategoriesReducer = (state = {}, action) => {
    if (action.type === LOAD_PRODUCT_BY_CATEGORY) {
        const { data, category } = action.payload;
        const data_show_product = data.map(el => ({...el, show_product: true}));
        return {...state, category, data: data_show_product}
    }  else if (action.type === SORT_PRODUCTS_BY_CATEGORY) {
        if (action.payload === 'title') {
            state.data.sort((a, b) => a.title.localeCompare(b.title))
        } else if (action.payload === 'priceAsc') {
            state.data.sort((a, b) => a.price - b.price)
        } else if (action.payload === 'priceDesc') {
            state.data.sort((a, b) => b.price - a.price)
        } else if (action.payload === 'default') {
            state.data.sort((a, b) => a.id - b.id)
        } 
        return [...state.data]
    } else if (action.type === FILTER_PRODUCTS_BY_CATEGORY) {

        const { minValue, maxValue } = action.payload
        return state.data.map(el => {
            if (el.price >= minValue && el.price <= maxValue) {
                el.showProduct = true
            } else {
                el.showProduct = false
            }
            return el
        })
    } else if (action.type === GET_DISCONT_PRODUCTS_BY_CATEGORY) {
        if(action.payload){
            return state.data.map(el => {
              if(el.discont_price===null){
                el.showProduct = false
              }
              return el
            })
          } else {
            return state.data.map(el => {
              el.showProduct = true;
              return el
            })
          }
        }
        else {
        return state; 
    }
}










