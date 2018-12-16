import React, { Component } from 'react';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'

import CartView from './components/CartView';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ProductList from './components/ProductList';

import { connect } from 'react-redux'

class App extends Component {
  render() {
    let { cart } = this.props;
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
              <Route path={"/products"} render={() => <ProductList />} />
              <Route path={"/cart"} render={() => <CartView />} />
              <Route component={NotFound} />
            </Switch>

          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(App);
