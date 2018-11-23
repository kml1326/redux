import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../actions/authAction';

class Signup extends Component {

	state = {
		username : '',
		email : '',
		password : ''
	}
	
	handleClick = () => {
		this.props.signup(this.state)
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id] : e.target.value
		})
	}

	render() {
		return (
			<div>
				<div className="signup left">
				<p className="header">Sign up</p>
				<input type="email" id="email" 
					placeholder="Email"
					onChange={this.handleChange}
					value={this.state.email}
				/>
				<input type="text" id="username" 
					placeholder="Username"
					onChange={this.handleChange}
					value={this.state.username}
				/>
				<input type="password" id="password" 
					placeholder="Password"
					onChange={this.handleChange}
					value={this.state.password}
				/>
				<button className="btn" onClick={this.handleClick}>Sign up</button>
				<p>Have an account  <Link to="/login">go to login </Link></p>
				</div>

				<div className='right poster'></div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		signup: (newUser) => dispatch(signUp(newUser))
	}
}

export default connect(null, mapDispatchToProps)(Signup);