import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './actions';

class App extends Component {

  state = {
    todo : ''
  }

  handleChange = (e) => {
    this.setState({todo : e.target.value})
  }
  render() {
    return (
        <div className='App'>
          
            <input type='text' onChange={this.handleChange}></input>
            <button onClick={() => this.props.dispatch(addTodo(this.state.todo))}>Submit</button>
          
            {
              this.props.array.map(todo => (<li>{todo}</li>))
            }
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { array : state.todoArray}
}

export default connect(mapStateToProps)(App);
