import React, { Component } from 'react';
import Navbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.css'

import Product from './components/Product';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
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


  renderProducts() {
    let { products} = this.state;
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
      <div className="container">
        <Navbar title="online-shopping" />
        <hr />
        <hr />
        {this.renderProducts()}
      </div>
    );
  }
}

export default App;
