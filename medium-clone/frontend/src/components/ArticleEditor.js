import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ArticleEditor extends Component {

	constructor() {
		super();
		this.state = {
			title: '',
			title_description: '',
			body: '',
			claps: null,
			post_date: new Date()
		}
	}

handleChange = (e) => {
	this.setState({
		[e.target.name] : e.target.value
	})
}

handleClick = () => {
	let data = this.state;
	this.setState({
		title: '',
		title_description: '',
		body: '',
		claps: null,
		post_date: null
	})
	fetch('http://localhost:1337/articles', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify(data)
	}).then(res => res.json())
	.then(date => {
		alert('Post Successfully')
		this.props.history.push('/posts');
	})
}

	render() {
		return (
			<div className='center'>
				<p>
					<input type='text' name='title' 
					onChange={this.handleChange} 
					placeholder='Title'
					value={this.state.title}
					/>
				</p>
				<p>
					<input type='text' name='title_description' 
					onChange={this.handleChange} 
					placeholder='Title Description'
					value={this.state.title_description}
					/>
				</p>
				<p>
					<textarea type='text' name='body' className='article-body' 
					onChange={this.handleChange} 
					value={this.state.body}
					></textarea>
				</p>
				<button onClick={this.handleClick}>Post</button>
        <br/><br/><br/><br/><br/><br/>
        <Link to='/posts' className='optionBtn'> See Posts </Link>
			</div>
		);
	}
}

export default ArticleEditor;