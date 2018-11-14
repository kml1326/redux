import React, {Component} from 'react';

class Login extends Component {

	state = {
		identifier : '',
		password : ''
	};

	handleClick = () => {
		fetch('http://localhost:1337/auth/local', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(this.state)	
		}).then(res => res.json())
		.then(data => console.log(data))
	}

	handleChange = (e) => {
		if(e.target.name === 'identifier') {
		this.setState({identifier: e.target.value})
		} else {
		this.setState({password: e.target.value})
		}
	}

	render() {
		return (
			<div>
				<div className='left poster'>
					
				</div>
				<div className="login right">
					<p className="header capital">log in to your account</p>
					<input type="email" name="identifier" 
						placeholder="Phone number, username or email address"
						onChange={this.handleChange}
						value={this.state.identifier} 
					/>
					<input type="password" name="password" 
						placeholder="Password" 
						onChange={this.handleChange}
						value={this.state.password}
					/>
					<p className="stay-signed-block"><input type="checkbox" className="signed-checkbox"></input><label>Stay signed in</label></p>
					<button 
						className="btn"
						onClick={this.handleClick}
					>
					Login
					</button>
					<p className="desc">Forgot password?</p>
				</div>
			</div>
		);
	}
}



export default Login;