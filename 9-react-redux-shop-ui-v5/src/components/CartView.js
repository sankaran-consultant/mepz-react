

import React, { Component } from 'react';

import store from '../store'
import { buy } from '../actions/cart'

class CartView extends Component {
    incrementQty(item) {
        let action = buy(item)
        store.dispatch(action)
    }
    renderCartItems(cart) {
        return cart.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>qty</td>
                    <td>price</td>
                    <td><i onClick={e => this.incrementQty(item)} className="fa fa-plus"></i></td>
                    <td><i className="fa fa-minus"></i></td>
                </tr>
            )
        })
    }
    render() {
        let cart = store.getState().cart || [];
        return (
            <div>
                <div className="row">
                    <div className="col-10 col-sm-12 col-md-10">
                        <div className="card">
                            <div className="card-header">Item(s) in cart</div>
                            <div className="cart-body">
                                <table className="table table-bordered table-sm">
                                    <tbody>
                                        {this.renderCartItems(cart)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartView;