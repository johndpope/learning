import React, { Component } from 'react';
import './AppContainer.css';
import CardContainer from '../CardContainer/CardContainer';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="AppContainer">
        <CardContainer />
      </div>
    );
  }
}

export default AppContainer;
