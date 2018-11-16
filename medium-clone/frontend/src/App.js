import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1 className='main-heading'>Medium Clone</h1>
        <div className='all-optionBtn-wrapper'>
          <div className='optionBtn-wrapper'>
          <p>Have an Account</p>
            <Link to='/login' className='optionBtn'> Login </Link>
          </div>
          <div className='optionBtn-wrapper'>
            <p>New User</p>
            <Link to='/signup' className='optionBtn'> Signup </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
