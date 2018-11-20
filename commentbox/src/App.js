import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    title: '',
    comment: '',
    comments: []
  }

  handleChange = (e) => {
    [e.target.id] = e.target.value;
  }
  render() {
    return (
      <div className="App">
       <input id='title' placeholder='Enter Title' onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
