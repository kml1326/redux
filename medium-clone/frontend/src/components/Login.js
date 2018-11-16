import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleChangeLogin, handleClickLogin } from '../actions';

class Login extends Component {

	state= {
		identifier : '',
		password : ''
	}

	render() {
		return (
			<div>
				<div className='left poster'>
					
				</div>
				<div className="login right">
					<p className="header capital">log in to your account</p>
					<input type="email" name="identifier" 
						placeholder="username or email address"
						onChange={(e) => this.props.dispatch(handleChangeLogin({value: e.target.value, name : e.target.name}))}
						value={this.state.identifier} 
					/>
					<input type="password" name="password" 
						placeholder="Password" 
						onChange={(e) => this.props.dispatch(handleChangeLogin({value: e.target.value, name : e.target.name}))}
						value={this.state.password}
					/>
					<p className="stay-signed-block"><input type="checkbox" className="signed-checkbox"></input><label>Stay signed in</label></p>
					<button 
						className="btn"
						onClick={() => this.props.dispatch(handleClickLogin())}
					>
					Login
					</button>
					<p className="desc">Forgot password?</p>
					<br/><br/>
					<p>Don't have an account ?  <Link to="/signup"> Signup </Link></p>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {state}
}


export default connect(mapStateToProps)(Login);