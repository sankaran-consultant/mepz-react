

import { productsReducer } from './products'
import { reviewsReducer } from './reviews'
import { cartReducer } from './cart'
import { reqStatusReducer } from './request-status'

import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    cart: cartReducer,
    status: reqStatusReducer
});

export default rootReducer;