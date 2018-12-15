import React, { Component } from 'react';
import './ActionButton.css';
class ActionButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment() {
        let { count } = this.state;
        count += 1
        this.setState({ count })
        let { onAction } = this.props;
        if (onAction)
            onAction();
    }
    render() {
        let { value } = this.props;
        let { count } = this.state;
        return (
            <div className="action-button">
                <div className="card card-default">
                    <div className="card-body">
                        <button onClick={e => this.increment()} className="btn btn-primary">{value}</button>
                        &nbsp;&mdash;&nbsp;
                        <span className="badge badge-danger">{count}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActionButton;