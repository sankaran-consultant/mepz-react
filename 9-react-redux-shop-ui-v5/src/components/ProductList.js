import React, { Component } from 'react';
import Product from './Product';

import { loadProducts } from '../actions/products';
import store from '../store'

class ProductList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            let products = store.getState().products;
            this.setState({ products })
        });
        setTimeout(() => {
            let action = loadProducts('elec', 2)
            store.dispatch(action)
        }, 0)
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    renderProducts() {
        let { products } = this.state;
        return products.map((item, idx) => {
            return (
                <div key={idx} className="list-group-item">
                    <Product product={item} />
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderProducts()}
            </div>
        );
    }
}

export default ProductList;