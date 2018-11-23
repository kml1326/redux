import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { createPost } from '../actions/postAction';
import { connect } from 'react-redux';

class CreatePost extends Component {

  state = {
    title: '',
    title_description: '',
    body: '',
    claps: null,
    post_date: new Date()
  }

handleChange = (e) => {
	this.setState({
		[e.target.name] : e.target.value
	})
}

handleClick = () => {
  this.props.createPost(this.state);
	// this.props.history.push('/posts');
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

function mapDispatchToProps(dispatch) {
  return {
		createPost: (newPost) => dispatch(createPost(newPost))
	}
}

export default connect(null, mapDispatchToProps)(CreatePost);