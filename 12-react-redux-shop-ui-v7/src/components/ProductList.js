import React, { Component } from 'react';
import Product from './Product';

import { loadProducts } from '../actions/products';

import { connect } from 'react-redux'

class ProductList extends Component {

    componentDidMount() {
        setTimeout(() => {
            let { loadProducts } = this.props;
            loadProducts();
        }, 0)
    }

    renderProducts() {
        let { products } = this.props;
        return products.map((item, idx) => {
            return (
                <div key={idx} className="list-group-item">
                    <Product product={item} />
                </div>
            )
        })
    }

    renderStatus() {
        let { status } = this.props;
        if (status.message) {
            return (
                <div>
                    <hr />
                    <span className="badge badge-info">{status.message}</span>
                    <hr />
                </div>
            )
        }
        else return null
    }

    render() {
        return (
            <div>

                {this.renderStatus()}

                {this.renderProducts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
        status: state.status
    }
}

function mapDispathToProps(dispatch) {
    return {
        loadProducts: (type, size) => dispatch(loadProducts(type, size))
    }
}

export default connect(mapStateToProps, mapDispathToProps)(ProductList);