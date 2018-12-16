
import { BUY } from '../constants'

export function cartReducer(state = [], action) {
    // console.log('-cart-reducer-');
    switch (action.type) {
        case BUY: {
            return [...state, action.item]
        }
        case 'LOAD_CART': {
            return [...state, ...action.cart]
        }
        default:
            return state;
    }
}