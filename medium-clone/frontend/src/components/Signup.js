import React, {Component} from 'react';

class Signup extends Component {

	state = {
		username : '',
		email : '',
		password : ''
	}

	handleClick = () => {
		let data = this.state;
		this.setState({
			username : '',
			email : '',
			password : ''
		})
		fetch('http://localhost:1337/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(data)	
		}).then(res => res.json())
		.then(data => {
			if(data.username) {
				alert('signup successful')
			} else {
				
				alert('Already Exist email or userName')
			}
		})
	}

	handleChange = (e) => {
		switch(e.target.name) {
			case 'email':
				this.setState({email: e.target.value});
				break;
			case 'password' :
				this.setState({password: e.target.value});
				break;
			case 'username' :
				this.setState({username: e.target.value});
				break;
			default:
				return ;
		}
	}

	render() {
		return (
			<div>
				<div className="signup left">
				<p className="header">Sign up</p>
				<input type="email" name="email" 
					placeholder="Mobile number or Email"
					onChange={this.handleChange}
					value={this.state.email}
				/>
				<input type="text" name="username" 
					placeholder="Username"
					onChange={this.handleChange}
					value={this.state.username}
				/>
				<input type="password" name="password" 
					placeholder="Password"
					onChange={this.handleChange}
					value={this.state.password}
				/>
				<button className="btn" onClick={this.handleClick}>Sign up</button>
				</div>
				<div className='right poster'>
					
				</div>
			</div>
		);
	}
}

export default Signup;