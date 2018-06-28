import React, { Component } from 'react';
import { fetchAndUpdateState } from '../../utils/fetch/library';
import CardList from '../CardList/CardList';
import * as CONSTANTS from './constants';
import { Button } from "@blueprintjs/core";

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.initialRender = false;
  }
  componentDidMount() {
    if (this.initialRender ===   false) {
      fetchAndUpdateState(
        {
          setState: (data, offset) => this.setState({theftData: data, offset: offset}),
          limit: CONSTANTS.PAGE_INCREMENTS,
          offset: this.state.offset 
        }
      );
      this.initialRender = true;
    }
  }
  componentWillUpdate(nextProps, nextState) {
    if (this.state.offset !== nextState.offset) {
      fetchAndUpdateState({
        setState: (data, offset) => this.setState({theftData: data, offset: offset}),
        limit: CONSTANTS.PAGE_INCREMENTS,
        offset: nextState.offset 
      });
    }
  }

  handleNext(e) {
    this.setState({
      offset: this.state.offset + CONSTANTS.PAGE_INCREMENTS
    });
  }

  handlePrev(e) {
    this.setState({
      offset: this.state.offset - CONSTANTS.PAGE_INCREMENTS
    });
  }

  render() {
    return (
      <div>
        <CardList theftData={this.state.theftData} />
        {!!this.state.offset && <Button text="Prev Page" onClick={this.handlePrev}/>}
        <Button text="Next Page" onClick={this.handleNext}/>
      </div>
    );
  }
}

export default CardContainer;