import React, { Component } from 'react';
import B from './B';

import ValueContext from './ValueContext'

class A extends Component {
    render() {
        let value = this.props.value * 2
        return (
            <div className="card card-deafult">
                <div className="card-body">
                    <span className="badge badge-dark">A - component</span>
                    &mdash;
                    {value}
                    <ValueContext.Provider value={value}>
                        <B />
                    </ValueContext.Provider>
                    <hr />
                    <ValueContext.Provider value={value * 2}>
                        <B />
                    </ValueContext.Provider>
                </div>
            </div>
        );
    }
}

export default A;