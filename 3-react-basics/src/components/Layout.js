import React, { Component } from 'react';

class Layout extends Component {
    renderChildren() {
        let { children } = this.props;
        return children.map((child, idx) => <li key={idx} className="list-group-item">{child}</li>)
    }
    render() {
        return (
            <div className="card card-default">
                <div className="card-body">
                    <ul>
                        {this.renderChildren()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Layout;