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
        let { value } = this.props;
        count += 1
        this.setState({ count })
        let { onAction } = this.props;
        if (onAction) {
            let event = { value: value * count }
            onAction(event);
        }
    }
    render() {
        let { value } = this.props;
        let { count } = this.state;
        let className = `btn ${value < 0 ? 'btn-danger' : 'btn-success'}`
        return (
            <div className="action-button">
                <div className="card card-default">
                    <div className="card-body">
                        <button onClick={e => this.increment()} className={className}>{value}</button>
                        &nbsp;&mdash;&nbsp;
                        <span className="badge badge-dark">{count}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActionButton;