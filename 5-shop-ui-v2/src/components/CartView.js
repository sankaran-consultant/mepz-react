

import React, { Component } from 'react';

class CartView extends Component {
    renderCartItems(cart) {
        return cart.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>qty</td>
                    <td>price</td>
                </tr>
            )
        })
    }
    render() {
        let { cart } = this.props;
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