
import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">404- Not Found</h1>
                    <hr className="my-4" />
                    <a className="btn btn-primary btn-lg" href="/" role="button">Go Home</a>
                </div>
            </div>
        );
    }
}

export default NotFound;