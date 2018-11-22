import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Signup extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username : '',
			email : '',
			password : ''
		}
	}
	

	handleClick = (e) => {

		
		// let data = this.state;
		// this.setState({
		// 	username : '',
		// 	email : '',
		// 	password : ''
		// })
		// fetch('http://localhost:1337/users', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		'Accept': 'application/json'
		// 	},
		// 	body: JSON.stringify(data)	
		// }).then(res => res.json())
		// .then(data => {
		// 	if(data.username) {
		// 		alert('signup successful')
		// 		this.props.history.push('/login');				
		// 	} else {
				
		// 		alert('Already Exist email or userName');
		// 	}
		// })
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

function mapStateToProps(state) {
	return {}
}

export default connect(mapStateToProps)(Signup);