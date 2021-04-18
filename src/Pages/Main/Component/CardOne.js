import React, { Component } from 'react';
import Card from './Card';
import '../Component/CardOne.scss';

class CardOne extends Component {
  constructor() {
    super();
    this.state = { cardData: [] };
  }

  componentDidMount() {
    fetch('/data/Card.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          cardData: data,
        });
      });
  }

  render() {
    const { cardData } = this.state;
    return (
      <div className="cardOne">
        {cardData.map((data, id) => {
          return <Card key={id} data={data} />;
        })}
      </div>
    );
  }
}

export default CardOne;
