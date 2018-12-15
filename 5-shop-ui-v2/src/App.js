import React, { Component } from 'react';
import Navbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.css'

import Product from './components/Product';
import CartView from './components/CartView';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCartOpen: false,
      cart: [],
      products: [
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
    }
  }

  toggleCart() {
    let { isCartOpen } = this.state
    this.setState({ isCartOpen: !isCartOpen })
  }

  addToCart(item, qty) {
    let { cart } = this.state;
    cart = cart.concat(item)
    this.setState({ cart })
  }

  renderProducts() {
    let { isCartOpen } = this.state;
    if (!isCartOpen) {
      let { products } = this.state;
      return products.map((item, idx) => {
        return (
          <div key={idx} className="list-group-item">
            <Product product={item} onBuy={(item, qty) => this.addToCart(item, qty)} />
          </div>
        )
      })
    }
    else {
      return null;
    }
  }

  renderCart() {
    let { isCartOpen } = this.state;
    if (isCartOpen) {
      let { cart } = this.state;
      return <CartView cart={cart} />
    } else {
      return null;
    }
  }

  render() {
    let { cart, isCartOpen } = this.state;
    return (
      <div className="container">
        <Navbar title="online-shopping" />
        <hr />
        <i className="fa fa-shopping-cart"></i> &nbsp;
        <span className="badge badge-danger">{cart.length}</span> item(s) in cart
        <hr />
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="/#" onClick={e => this.toggleCart()}>{isCartOpen ? 'View products' : 'View cart'}</a>
          </li>
        </ul>
        <hr />
        {this.renderProducts()}
        {this.renderCart()}
      </div>
    );
  }
}

export default App;
