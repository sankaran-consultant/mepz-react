
console.log("-index.js-");


import store from './store'
import { loadProducts } from './actions/products'
import { buy } from './actions/cart'


// View



setInterval(() => {
    let action = loadProducts('elec', 2)
    console.log("dispatching action - LOAD_PRODUCTS_SUCCESS - to store");
    store.dispatch(action)
}, 4000)


setInterval(() => {
    let action = buy({})
    console.log("dispatching action - BUY - to store");
    store.dispatch(action)
}, 3000)


//---------------------------------

//---------------------------------
store.subscribe(() => {
    console.log('-product-list view subscribing-');
    let state = store.getState().products;
    console.log(state)
})

store.subscribe(() => {
    console.log('-cart view subscribing-');
    let state = store.getState().cart;
    console.log(state)
})