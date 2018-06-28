import React, { Component } from 'react';
import { getGameDataFromId } from '../utils/database';

export class GamePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			playerOne: '',
			playerTwo: '',
			challenge: '',
			mathMajor: '',
			error: false,
			loaded: false
		};
	}
	componentDidMount() {
		getGameDataFromId(this.props.match.params.id)
			.then((results) => {
				if(results.exists()) {
					this.setState({
						...results.val(),
						loaded: true
					});
				} else {
					this.setState({ 
						error: true, 
						loaded: true 
					});
				}
		});
	}
	render() {
		return (
			<div>
				{!this.state.loaded && <p>Loading...</p>}
				{this.state.error && <p>Game {this.props.match.params.id} does not exist</p>}
				{!this.state.error && this.state.loaded && 
					<div>
						<h3>Player One:</h3> {this.state.playerOne}
						<h3>Player Two:</h3> {this.state.playerTwo}
						<h3>Challenge:</h3> {this.state.challenge}
					</div>
				}
			</div>
		)
	}
}

export default GamePage;