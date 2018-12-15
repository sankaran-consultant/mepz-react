import React, { Component } from 'react';
import PropTypes from 'prop-types'

import 'bootstrap/dist/css/bootstrap.css';
import Greeting from './components/Greeting';
import CounterBox from './components/CounterBox';
import Layout from './components/Layout';
import Product from './components/Product';
import Employee from './components/Employee';
import A from './components/A';

class App extends Component {
  constructor(props) {
    super()
    //console.log(props);  
    this.state = {
      message: 'hello...'
    }
    console.log("App :: constructor");
  }
  changeMessage(message) {
    this.setState({ message })  // state is mutable...
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
        <A value={1000} />
        <hr />
        <Layout>
          <Product />
          <Product />
          <Product />
        </Layout>
        <hr />
        <Layout>
          <Employee />
          <Product />
          <Product />
        </Layout>
        <hr />
        <CounterBox />
        <hr />
        <button onClick={e => this.changeMessage('good morning')} className="btn btn-primary">GM</button>&nbsp;
        <button onClick={e => this.changeMessage('good noon')} className="btn btn-primary">GN</button>&nbsp;
        <button onClick={e => this.changeMessage('good evening')} className="btn btn-primary">GE</button>&nbsp;
        <button onClick={e => this.changeMessage('')} className="btn btn-danger">Remove</button>&nbsp;
        <hr />
        {message ? <Greeting message={message} /> : null}
      </div>
    );
  }

  componentDidMount() {
    console.log("App:: componentDidMount");
    // n/w request..
    // setTimeout(() => {
    //   let serverMessage = "hello! from server-side "
    //   this.setState({ message: serverMessage });
    // }, 2000)
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
