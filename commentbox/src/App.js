import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTitle } from './actions/action';

class App extends Component {

  state = {
    title: ''
  }

  handleChange = (e) => {
    this.setState({
      title : e.target.value
    })
  }

handleSubmit = (e) => {
  e.preventDefault();
  this.props.dispatch(addTitle(this.state.title))
  console.log(this.props)
}

  render() {
    
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input id='title' placeholder='Enter Title' onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    title : state.title
  }
}

export default connect(mapStateToProps)(App);
