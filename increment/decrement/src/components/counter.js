import React, {Component} from 'react';
import {increment, decrement } from '../actions';
import { connect } from 'react-redux';


class Counter extends Component {
    render() {
        return (
            <div>
                <label>{this.props.value}</label>
                <button onClick={() => this.props.dispatch(increment())}> + </button>
                <button onClick={() => this.props.dispatch(decrement())}> - </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
	return {value: state.count};
}

export default connect(mapStateToProps)(Counter);
