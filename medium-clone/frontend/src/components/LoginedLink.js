import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class LoginedLink extends Component {
  render() {
    return (
      <ul>
        <li><NavLink to='/logout'> Log Out </NavLink></li>
      </ul>
    )
  }
}

export default LoginedLink;