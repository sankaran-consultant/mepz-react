import React, { Component } from 'react';
import classNames from 'classnames'
import Review from './Review';
import ReviewForm from './ReviewForm_v2';
import axios from 'axios'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: 1,
            reviews: []
        }
    }

    addNewReview(newReview) {
        let id = this.props.product.id;
        let apiUrl = `http://localhost:8080/api/products/${id}/reviews`;
        axios
            .post(apiUrl, newReview)
            .then(response => response.data)
            .then(review => {
                let { reviews } = this.state;
                reviews = reviews.concat(review);
                this.setState({ reviews })
            })
    }

    changeTab(tabIndex) {
        this.setState({ currentTab: tabIndex }, () => {
            if (tabIndex === 3) {
                let id = this.props.product.id;
                let apiUrl = `http://localhost:8080/api/products/${id}/reviews`;
                // promise api
                axios
                    .get(apiUrl)
                    .then(response => response.data)
                    .then(reviews => {
                        this.setState({ reviews })
                    })
            }
        })
    }

    handleBuy() {
        let { onBuy, product } = this.props;
        if (onBuy) {
            onBuy(product, 1)
        }
    }

    renderBuyBtn(product) {
        if (true) return <button onClick={e => this.handleBuy()} className="btn btn-sm btn-primary">buy</button>
        else return null;
    }

    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((item, idx) => <Review review={item} key={idx} />)
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
                    <div>
                        {this.renderReviews()}
                        <ReviewForm onNewReview={newReview => this.addNewReview(newReview)} />
                    </div>
                )
            }
            default:
                return null;
        }
    }

    render() {
        let { product } = this.props;
        let { currentTab } = this.state;
        return (
            <div>
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
                                <a className={classNames('nav-link', { active: currentTab === 1 })} onClick={e => this.changeTab(1)} href={"#/"}>Description</a>
                            </li>
                            <li className="nav-item">
                                <a className={classNames('nav-link', { active: currentTab === 2 })} onClick={e => this.changeTab(2)} href={"#/"}>Specification</a>
                            </li>
                            <li className="nav-item">
                                <a className={classNames('nav-link', { active: currentTab === 3 })} onClick={e => this.changeTab(3)} href={"#/"}>Reviews</a>
                            </li>
                        </ul>
                        {this.renderTabPanel(product)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;