import React, { Component } from 'react';
import ActionButton from './ActionButton';
import TotalCountDisplay from './TotalCountDisplay';

class CounterBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalCount: 0
        }
    }
    incerementTotalCount() {
        let { totalCount } = this.state;
        totalCount += 1;
        this.setState({ totalCount })
    }
    render() {
        let { totalCount } = this.state;
        return (
            <div className="card card-default">
                <div className="card-header">counter box : <span className="badge badge-warning">{totalCount}</span></div>
                <div className="card-body">
                    <ActionButton value={1} onAction={e => this.incerementTotalCount()} />
                    <ActionButton value={10} onAction={e => this.incerementTotalCount()} />
                    <ActionButton value={-1} onAction={e => this.incerementTotalCount()} />
                    <ActionButton value={-10} onAction={e => this.incerementTotalCount()} />
                    <div style={{ clear: 'both' }}>
                        <hr />
                        <TotalCountDisplay value={totalCount} />
                    </div>

                </div>
            </div>
        );
    }
}

export default CounterBox;