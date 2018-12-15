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
    incerementTotalCount(e) {
        let { totalCount } = this.state;
        totalCount += e.value;
        this.setState({ totalCount })
    }
    renderActionButtons() {
        let numbers = [1, 10, 100, 1000, -1, 10, 100, -1000];
        return numbers.map((n, idx) => <ActionButton key={idx} value={n} onAction={e => this.incerementTotalCount(e)} />)
    }
    render() {
        let { totalCount } = this.state;
        return (
            <div className="card card-default">
                <div className="card-header">counter box : <span className="badge badge-warning">{totalCount}</span></div>
                <div className="card-body">
                    {
                        /* 
                            <ActionButton value={1} onAction={e => this.incerementTotalCount(e)} />
                            <ActionButton value={10} onAction={e => this.incerementTotalCount(e)} /> 
                        */
                        this.renderActionButtons()
                    }

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