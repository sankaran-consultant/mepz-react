import React, { Component } from 'react';

class TotalCountDisplay extends Component {
    render() {
        let { value } = this.props;
        return (
            <div className="alert alert-danger">
                Total count : <span className="badge badge-warning">{value}</span>
                <hr />
                {/* {value > 10 ? 'pothum, vena, ill cry' : ''} */}
            </div>
        );
    }
}

export default TotalCountDisplay;