import React, { Component } from 'react';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'

import CartView from './components/CartView';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ProductList from './components/ProductList';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }

  addToCart(item, qty) {
    let { cart } = this.state;
    cart = cart.concat(item)
    this.setState({ cart })
  }

  renderCart() {
    let { cart } = this.state;
    return <CartView cart={cart} />
  }

  render() {
    let { cart } = this.state;
    return (
      <div className="container">
        <Navbar title="online-shopping" />
        <hr />
        <Router>
          <div>
            <i className="fa fa-shopping-cart"></i> &nbsp;
            <span className="badge badge-danger">{cart.length}</span> item(s) in cart
            <hr />
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="products" >products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="cart" >cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="orders" >orders</Link>
              </li>
            </ul>
            <hr />

            <Switch>
              <Route path={"/"} exact={true} component={Home} />
              <Route path={"/products"} render={() => <ProductList onBuy={item => this.addToCart(item)} />} />
              <Route path={"/cart"} render={() => this.renderCart()} />
              <Route component={NotFound} />
            </Switch>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
