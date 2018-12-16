import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            stars: 5,
            author: 'nag@gmail.com',
            body: ''
        }
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen })
    }
    handleChange(e) {
        let field = e.target.id
        let fieldValue = e.target.value
        this.setState({ [field]: fieldValue })
    }
    handleFormSubmit(e) {
        e.preventDefault();
        let { stars, author, body } = this.state;
        let newReview = { stars, author, body }
        let { onNewReview } = this.props;
        if (onNewReview) {
            onNewReview(newReview)
            this.toggleForm();
        }

    }
    isValidForm() {
        let { stars } = this.state;
        return stars < 3 ? false : true;
    }
    renderForm() {
        let { isOpen, stars, author, body } = this.state;
        if (!isOpen)
            return (<button className="btn btn-sm btn-info" onClick={e => this.toggleForm()}><i className="fa fa-plus"></i></button>)
        else return (
            <div className="card">
                <div className="card-header">Review Form</div>
                <div className="card-body">
                    <form noValidate onSubmit={e => this.handleFormSubmit(e)}>
                        <div className="form-group">
                            <label>stars</label>
                            <select className="form-control" id="stars" value={stars} onChange={e => this.handleChange(e)}>
                                {[1, 2, 3, 4, 5].map((n, idx) => <option key={idx}>{n}</option>)}
                            </select>
                            {stars < 3 ? 'you must give atleast 3 stars' : null}
                        </div>
                        <div className="form-group">
                            <label>author</label>
                            <input className="form-control" id="author" value={author} type="email" onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <label>body</label>
                            <textarea className="form-control" id="body" value={body} onChange={e => this.handleChange(e)}></textarea>
                        </div>
                        <button disabled={!this.isValidForm()} className="btn btn-sm btn-dark">submit</button>
                        &nbsp;
                        <button type="button" onClick={e => this.toggleForm()} className="btn btn-sm btn-danger">cancel</button>
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