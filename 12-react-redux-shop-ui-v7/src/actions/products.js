
import { LOAD_PRODUCTS_SUCCESS } from '../constants'

import Api from '../api'

export function loadProducts(type, size) {

    // let products = []
    // return { type: LOAD_PRODUCTS_SUCCESS, products }  // sync Action

    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'please wait, loading products' }) // async Action
        Api.loadProducts(type, size)
            .then(products => {
                dispatch({ type: 'REQUEST_FINISHED', message: '' }) // async Action
                dispatch({ type: LOAD_PRODUCTS_SUCCESS, products }) // async Action
            })

    }

}