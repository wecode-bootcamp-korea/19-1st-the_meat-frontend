import React, { Component } from 'react';
import Card from './Card';
import '../Component/CardTwo.scss';

class CardTwo extends Component {
  constructor() {
    super();
    this.state = { cardData: [] };
  }

  componentDidMount() {
    fetch('/data/CardTwo.json')
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
      <div className="cardTwo">
        {cardData.map((data, id) => {
          return <Card key={id} data={data} />;
        })}
      </div>
    );
  }
}

export default CardTwo;
