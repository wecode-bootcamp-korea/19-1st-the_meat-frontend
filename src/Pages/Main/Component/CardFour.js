import React, { Component } from 'react';
import Card from './Card';
import '../Component/CardFour.scss';

class CardFour extends Component {
  constructor() {
    super();
    this.state = { cardData: [] };
  }

  componentDidMount() {
    fetch('/data/CardFour.json')
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
      <div className="cardFour">
        {cardData.map((data, id) => {
          return <Card key={id} data={data} />;
        })}
      </div>
    );
  }
}

export default CardFour;
