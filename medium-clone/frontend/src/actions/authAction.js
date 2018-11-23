export const signUp = (newUser) => {

	return (dispatch) => {
		fetch('http://localhost:1337/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({
				username : newUser.username,
				email : newUser.email,
				password : newUser.password
			})	
		}).then(res => {
			if(res.ok) {
				res.json()
				.then(data => dispatch({type:"SIGNUP_SUCCESS", data}))
			}
		})
	}
}