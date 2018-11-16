

const handleClickLogin = (state) => {
	fetch('http://localhost:1337/auth/local', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify(state)
	}).then(res => res.json())
	.then(data => {
		if(data.jwt) {
			this.props.history.push('/article');
			alert(`Welcome ${data.user.username}`)	
		} else {
			alert('User Name or Password Invalid \n Please check userName or password')
		}
	})	
}

export default handleClickLogin;