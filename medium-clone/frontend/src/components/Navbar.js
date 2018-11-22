import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginedLink from './LoginedLink';
import SignedUpLink from './SignedUpLink';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to='/'> Medium-clone </Link>
          <SignedUpLink />
          <LoginedLink />
        </nav>
      </div>
    )
  }
}

export default Navbar;