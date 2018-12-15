import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Greeting extends Component {
    constructor(props) {
        super()
        console.log("Greeting :: constructor");
    }
    render() {
        console.log("Greeting :: render");
        // this.props.message="im mutating..."  // error, props always rady-only
        let { message } = this.props;
        return (
            <div className="alert alert-info">
                <p>{message}</p>
                <hr />
                <p>{new Date().toLocaleTimeString()}</p>
            </div>
        );
    }
    componentDidMount() {
        console.log("Greeting :: componentDidMount");
        this.interval=setInterval(() => {
            //this.forceUpdate();
        }, 500)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Greeting :: shouldComponentUpdate");
        return this.props.message !== nextProps.message;
    }

    componentDidUpdate() {
        console.log("Greeting :: componentDidUpdate");
    }

    componentWillUnmount() {
        clearInterval(this.interval)
        console.log("Greeting :: componentWillUnmount");
    }

}

Greeting.propTypes = {
    message: PropTypes.string
}
Greeting.defaultProps = {
    message: 'vanakkam'
}

export default Greeting;