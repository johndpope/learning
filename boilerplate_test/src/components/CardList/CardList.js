import React, { Component } from 'react';
import { Card } from "@blueprintjs/core";
 
class CardList extends Component {
  toDateString(date) {
    return `${new Date(date).toLocaleDateString()} ${new Date(date).toLocaleTimeString()}`
  }
  renderCards() {
    let cardList = null;

    if (this.props.theftData) {
      // console.log(new Date(this.props.theftData[0].updatedOn).toLocaleDateString())
      cardList = this.props.theftData.map((theft, index) => {
        return (
          <Card interactive={true} key={theft.id}>
            <ul className="Case-theftInfo">
              <li>Case Number: {theft.caseNumber}</li>
              <li>Primary Type: {theft.primaryType}</li>
              <li>Description: {theft.description}</li>
              <li>Location Description: {theft.locationDescription}</li>
              <li>Arrest Made? {theft.arrest ? "Yes" : "No"}</li>
              <li>Domestic Made? {theft.arrest ? "Yes" : "No"}</li>
              <li>Date: {this.toDateString(theft.date)}</li>
              <li>Updated On: {this.toDateString(theft.updatedOn)}</li>
            </ul>
          </Card>
        )
      })
    }

    return cardList;
  }

  render() {
    return (
      <div className="Card">
        {this.renderCards()}
      </div>
    );
  }
}

export default CardList;