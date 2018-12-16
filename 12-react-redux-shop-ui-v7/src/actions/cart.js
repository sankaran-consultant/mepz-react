
import { BUY } from '../constants'

export function buy(item, qty) {
    let cart = localStorage.getItem('cart')
    if (cart) {
        cart = JSON.parse(cart);
        cart.push(item)
        localStorage.setItem('cart', JSON.stringify(cart))
        return { type: BUY, item, qty }
    } else {
        localStorage.setItem('cart', JSON.stringify([item]))
        return { type: BUY, item, qty }
    }

    // return function (dispatch) {
    //     axios.post('http://localhost:8181/api/cart/nag', item)
    //         .then(response => {
    //             console.log(response);
    //         })
    // }

}

export function loadCart() {
    let cart = localStorage.getItem('cart')
    if (cart) {
        cart = JSON.parse(cart);
        return { type: 'LOAD_CART', cart }
    } else {
        return { type: 'LOAD_CART', cart: [] }
    }
}
