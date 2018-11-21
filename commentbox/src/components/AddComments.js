import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/action';
import SingleComment from './SingleComment';

class AddComments extends Component {

  state = {
    comment: ''
  }

  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(addComment(this.state.comment))
  }

  render() {
    const { comments } = this.props;
    return (
      (comments.length) ? <div className='comment-list'>
      { comments.map((comment, i) => <p key={i}>{comment}</p>) }
      <SingleComment onSubmit={this.handleSubmit} handleChange={this.handleChange} />
    </div>
      : <div className='comment-list'>
        <SingleComment onSubmit={this.handleSubmit} handleChange={this.handleChange} /> 
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comment.comments
  }
}

export default connect(mapStateToProps)(AddComments);