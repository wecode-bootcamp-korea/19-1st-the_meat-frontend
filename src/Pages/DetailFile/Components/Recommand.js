import React, { Component } from 'react';
import ProductsList from './ProductsList';
import './Recommand.scss';

class Recommand extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  nextButton = () => {
    this.setState({
      value: this.state.value + 100,
    });
  };
  x;
  prevButton = () => {
    this.setState({
      value: this.state.value - 100,
    });
  };
  render() {
    // if(this.state.value == )
    console.log(this.state);
    return (
      <div className="recommandProducts">
        <h1 className="recommandTitle">추천제품</h1>
        <ul
          style={{ transform: `translate(+${this.state.value}%)` }}
          className="recommandProductList"
        >
          {data.map((elements, id) => (
            <ProductsList
              key={id}
              id={id}
              img={elements.img}
              name={elements.name}
              price={elements.price}
            />
          ))}
        </ul>
        <button onClick={this.prevButton}>왼</button>
        <button onClick={this.nextButton}>오</button>
      </div>
    );
  }
}

export default Recommand;

const data = [
  {
    img:
      'https://www.happy-ali.com/wp-content/uploads/2020/08/quokka1-1024x1024.jpg',
    name: '쿼카짱',
    price: 10000,
  },
  {
    img:
      'https://www.happy-ali.com/wp-content/uploads/2020/08/quokka1-1024x1024.jpg',
    name: '쿼카짱',
    price: 90000,
  },
  {
    img:
      'https://www.happy-ali.com/wp-content/uploads/2020/08/quokka1-1024x1024.jpg',
    name: '쿼카짱',
    price: 70000,
  },
  {
    img:
      'https://www.happy-ali.com/wp-content/uploads/2020/08/quokka1-1024x1024.jpg',
    name: '쿼카짱',
    price: 60000,
  },
  {
    img:
      'https://www.happy-ali.com/wp-content/uploads/2020/08/quokka1-1024x1024.jpg',
    name: '쿼카짱',
    price: 20000,
  },
  {
    img:
      'https://www.happy-ali.com/wp-content/uploads/2020/08/quokka1-1024x1024.jpg',
    name: '쿼카짱',
    price: 30000,
  },
  {
    img:
      'https://www.happy-ali.com/wp-content/uploads/2020/08/quokka1-1024x1024.jpg',
    name: '쿼카짱',
    price: 40000,
  },
  {
    img:
      'https://www.happy-ali.com/wp-content/uploads/2020/08/quokka1-1024x1024.jpg',
    name: '쿼카짱',
    price: 50000,
  },
];
