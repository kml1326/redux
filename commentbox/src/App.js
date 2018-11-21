import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTitle } from './actions/action';
import AddComments from './components/AddComments';

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
}

  render() {
    const { reduxTitle } = this.props;
    return (
      <div className="App">
        {
          (reduxTitle) 
          ? <section>
              <p>{ reduxTitle }</p> 
              <AddComments />
            </section>
          : <form onSubmit={this.handleSubmit}>
              <input id='title' placeholder='Enter Title' onChange={this.handleChange} />
            </form>
        }    
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reduxTitle : state.title.title
  }
}

export default connect(mapStateToProps)(App);
