import React, {Component} from 'react';

class Posts extends Component {

	state = {
		postsArray : []
	}


componentWillMount = () => {
	fetch('http://localhost:1337/articles')
	.then(res => res.json())
	.then(data => {
		console.log(data)
		this.setState({postsArray : data})
	})
}

	render() {
		return (
			<div className='posts-wrapper'>
				{
					this.state.postsArray.map((data, i) => 
						<div key={i} className='post-wrapper'>
							<h2>{data.title}</h2>
							<h4>{data.title_description}</h4>
							<p>{data.body}</p>
						</div>
					)
				}
			</div>
		);
	}
}

export default Posts;