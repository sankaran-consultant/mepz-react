import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = { isOpen: false }
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen })
    }
    renderForm() {
        let { isOpen } = this.state;
        if (!isOpen)
            return (<button className="btn btn-info" onClick={e => this.toggleForm()}><i className="fa fa-plus"></i></button>)
        else return (
            <div className="card">
                <div className="card-header">Review Form</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>stars</label>
                            <select className="form-control"></select>
                        </div>
                        <div className="form-group">
                            <label>author</label>
                            <input className="form-control" type="email" />
                        </div>
                        <div className="form-group">
                            <label>body</label>
                            <textarea className="form-control"></textarea>
                        </div>
                        <button className="btn btn-dark">submit</button>
                        &nbsp;
                        <button type="button" onClick={e => this.toggleForm()} className="btn btn-danger">cancel</button>
                    </form>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="row">
                <div className="col-8 col-sm-8 col-md-8">
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}

export default ReviewForm;