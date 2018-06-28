import React, { Component } from 'react';

export default class EntryForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			playerOne: '',
			challenge: 'Odds you ',
			playerTwo: '',
			mathMajor: '',
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		alert('Submit event has been fired.');
		console.log(this.state.playerOne);
		this.props.onSubmit({
			playerOne: this.state.playerOne,
			playerTwo: this.state.playerTwo,
			challenge: this.state.challenge,
			mathMajor: this.state.mathMajor
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
	         	Enter your name:
	         	<input
	         		type="text"
	         		value={this.state.playerOne}
	         		onChange={(e) => {this.setState({playerOne: e.target.value})}}
	         	/><br />
		        Who are you challenging? 
		        <input
		        	type="text"
		        	value={this.state.playerTwo}
		        	onChange={(e) => {this.setState({playerTwo: e.target.value})}}
		        /><br />
	        	Enter your challenge: 
		        <textarea
		        	type="text"
		        	value={this.state.challenge}
		        	onChange={(e) => {this.setState({challenge: e.target.value})}}
		        /><br />
		        Are you a math major? 
	          	<input
	          		type="checkbox"
	          		value={this.state.mathMajor}
	          		onChange={(e) => {(this.state.mathMajor === '') ? this.setState({mathMajor: 'on'}) : this.setState({mathMajor: ''})}}
				/><br />
	          	<input type="submit" value="Odds!" />
	    	</form>
        );
	}
}