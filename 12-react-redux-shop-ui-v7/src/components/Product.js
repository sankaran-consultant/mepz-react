import React, { Component } from 'react';
import classNames from 'classnames'
import Review from './Review';
import ReviewForm from './ReviewForm_v2';


import { addNewReview, loadReviews } from '../actions/reviews';
import { buy } from '../actions/cart';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: 1,
        }
    }
    addNewReview(newReview) {
        let id = this.props.product.id;
        let { addNewReview } = this.props.actions
        addNewReview(id, newReview)
    }

    changeTab(tabIndex) {
        this.setState({ currentTab: tabIndex }, () => {
            if (tabIndex === 3) {
                let id = this.props.product.id;
                let { loadReviews } = this.props.actions;
                loadReviews(id)
            }
        })
    }

    handleBuy() {
        let { product } = this.props;
        let { buy } = this.props.actions;
        buy(product, 1)
    }

    renderBuyBtn() {
        if (true) return <button onClick={e => this.handleBuy()} className="btn btn-sm btn-primary">buy</button>
    }

    renderReviews() {
        let { reviews } = this.props;
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


function mapStateToProps(state, props) {
    return {
        reviews: state.reviews[props.product.id] || []
    }
}

function mapDispathToProps(dispatch) {

    // return {
    //     loadReviews: (id, size) => dispatch(loadReviews(id, size)),
    //     addNewReview: (id, review) => dispatch(addNewReview(id, review)),
    //     buy: (product, qty) => dispatch(buy(product, qty)),
    // }

    let actions = { loadReviews, addNewReview, buy };
    return {
        actions: bindActionCreators(actions, dispatch)
    }

}

export default connect(mapStateToProps, mapDispathToProps)(Product);