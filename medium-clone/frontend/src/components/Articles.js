import React, {Component} from 'react';

class Article extends Component {

	state = {
		username : '',
		email : '',
		password : ''
	}

	handleClick = () => {
		fetch('http://localhost:1337/users', {
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
				<p className="desc">Login With facebook</p>
			</div>
		);
	}
}

export default Article;