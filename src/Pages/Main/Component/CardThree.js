import React, { Component } from 'react';
import Card from './Card';
import '../Component/CardThree.scss';

class CardThree extends Component {
  constructor() {
    super();
    this.state = { cardData: [] };
  }

  componentDidMount() {
    fetch('/data/CardThree.json')
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
      <div className="cardThree">
        {cardData.map((data, id) => {
          return <Card key={id} data={data} />;
        })}
      </div>
    );
  }
}

export default CardThree;
