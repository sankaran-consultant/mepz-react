import React, { Component } from 'react';
import PropTypes from 'prop-types'

import 'bootstrap/dist/css/bootstrap.css';
import Greeting from './components/Greeting';

class App extends Component {
  constructor(props) {
    super()
    //console.log(props);  
    this.state = {
      message: 'good evening'
    }
    console.log("App :: constructor");
  }
  changeMessage(message) {
    this.setState({ message })
  }
  render() {
    console.log("App :: render");
    // let title = this.props.title;
    // let trainer = this.props.trainer;
    //or
    let { title, trainer } = this.props; // de-structuring
    let { message } = this.state;
    return (
      <div className="container">
        <hr />
        <h1>{title} -
        <span className="badge badge-dark">{trainer}</span>
        </h1>
        <hr />
        <button onClick={e => this.changeMessage('good morning')} className="btn btn-primary">GM</button>&nbsp;
        <button className="btn btn-primary">GN</button>&nbsp;
        <button className="btn btn-primary">GE</button>&nbsp;
        <hr />
        <Greeting message={message} />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  trainer: PropTypes.string
}
App.defaultProps = {
  trainer: 'Unknown'
}

export default App;
