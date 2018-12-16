

import { LOAD_PRODUCTS_SUCCESS } from '../constants'


export function productsReducer(state = [], action) {
    // console.log('-products-reducer-');
    switch (action.type) {
        case LOAD_PRODUCTS_SUCCESS: {
            let { products } = action;
            return [...state, ...products]
        }
        // case BUY: {
        //     return state.splice(0, 1)
        // }
        default:
            return state;
    }
}