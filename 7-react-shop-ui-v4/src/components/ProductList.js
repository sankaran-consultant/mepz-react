import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios'

class ProductList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        let apiUrl = "http://0.0.0.0:8080/api/products";
        //
        axios
            .get(apiUrl)
            .then(response => response.data)
            .then(products => this.setState({ products }))
    }

    renderProducts() {
        let { products } = this.state;
        return products.map((item, idx) => {
            return (
                <div key={idx} className="list-group-item">
                    <Product product={item} onBuy={(item, qty) => this.props.onBuy(item, qty)} />
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