import React, { Component } from 'react';
import Navbar from './components/Navbar';
import classNames from 'classnames'

import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 1,
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
        }
      ]
    }
  }

  changeTab(tabIndex) {
    this.setState({ currentTab: tabIndex })
  }

  renderBuyBtn(product) {
    if (product.canBuy) return <button className="btn btn-sm btn-primary">buy</button>
    else return null;
  }

  renderTabPanel(product) {
    let { currentTab } = this.state;
    switch (currentTab) {
      case 1: {
        return (
          <div>{product.description}</div>
        )
      }
      case 2: {
        return (
          <div>Not Yet</div>
        )
      }
      case 3: {
        return (
          <div>None Yet</div>
        )
      }
      default:
        return null;
    }
  }

  renderProducts() {
    let { products, currentTab } = this.state;
    return products.map((product, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <img src={product.image} className="img-fluid" alt={product.name} />
            </div>
            <div className="col-9 col-sm-9 col-md-9">
              <h5>{product.name}</h5>
              <h6>&#8377;{product.price}</h6>
              {this.renderBuyBtn(product)}
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className={classNames('nav-link', { active: currentTab === 1 })} onClick={e => this.changeTab(1)} href="/#">Description</a>
                </li>
                <li className="nav-item">
                  <a className={classNames('nav-link', { active: currentTab === 2 })} onClick={e => this.changeTab(2)} href="/#">Specification</a>
                </li>
                <li className="nav-item">
                  <a className={classNames('nav-link', { active: currentTab === 3 })} onClick={e => this.changeTab(3)} href="/#">Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(product)}
            </div>
          </div>
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
