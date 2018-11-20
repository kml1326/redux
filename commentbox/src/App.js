import React, { Component } from 'react';
import './App.css';


class App extends Component {

  state = {
    title: '',
    comment: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <form>
          <input id='title' placeholder='Enter Title' onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

mapStateToProps = (state) => {
  return {
    comments : state.comments
  }
}

export default connect(mapStateToProps)(App);
