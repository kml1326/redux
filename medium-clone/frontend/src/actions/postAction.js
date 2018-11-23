export const createPost = (newPost) => {

	return (dispatch) => {
    fetch('http://localhost:1337/articles', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify({
      title: newPost.title,
			title_description: newPost.title_description,
			body: newPost.body,
			claps: newPost.claps,
			post_date: newPost.post_date
    })
	  }).then(res => {
      if(res.ok) {
        res.json()
        .then(data => dispatch({type:"CREATEPOST_SUCCESS", data}))
      }
    })

  }

}