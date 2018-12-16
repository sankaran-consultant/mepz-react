
import { LOAD_PRODUCTS_SUCCESS } from '../constants'


export function loadProducts(type, size) {

    //... type-elec & size=2

    let products = [
        {
            id: 1,
            name: 'Laptop',
            price: 198000,
            canBuy: true,
            image: 'images/Laptop.png',
            description: 'New Mac Pro'
        },
        {
            id: 2,
            name: 'Mobile',
            price: 18000,
            canBuy: true,
            image: 'images/Mobile.png',
            description: 'New  Pro'
        },
    ]

    return { type: LOAD_PRODUCTS_SUCCESS, products }

}