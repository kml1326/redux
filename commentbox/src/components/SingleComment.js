import React, { Component } from 'react'

export default class SingleComment extends Component {

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input placeholder='add a comment' onChange={this.props.handleChange} /> 
      </form>
    )
  }
}
