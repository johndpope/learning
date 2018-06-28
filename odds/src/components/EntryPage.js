import React, { Component } from 'react';
import { connect } from 'react-redux';
import EntryForm from './EntryForm';
import { addGameInstance } from '../actions/game';

export class EntryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: undefined
        }
    }

    onSubmit = (gameInstance) => {
        this.props.addGameInstance(gameInstance);
    };

    componentWillReceiveProps(nextProps){
        if(nextProps.id !== this.props.id){
            this.props.history.push(`/${nextProps.id}`);
        }
    }

    render() {
        return (
            <div>
                <EntryForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.game[0] && state.game[0].id
    }
};

const mapDispatchToProps = (dispatch) => ({
    addGameInstance: (gameInstance) => dispatch(addGameInstance(gameInstance))
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryPage);