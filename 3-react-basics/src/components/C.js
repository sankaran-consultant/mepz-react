import React, { Component } from 'react';

import ValueContext from './ValueContext'

class C extends Component {
    render() {
        return (
            <div className="card card-deafult">
                <div className="card-body">
                    <span className="badge badge-dark">C - component</span>
                    &mdash;
                    <ValueContext.Consumer>
                        {value => <span className="badge badge-info">{value}</span>}
                    </ValueContext.Consumer>
                </div>
            </div>
        );
    }
}

export default C;