import React, { Component } from 'react';
import Title from './Title';
import Image from './Image';
import Button from './Button';
import Content from './Content';
import './Layout.scss';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      image_url: '',
      name: '',
      real_price: '',
      unit: '',
      count: 1,
    };
  }
  buttonHandler = e => {
    console.log(e);
  };
  componentDidMount() {
    fetch('data/Data.json', {})
      .then(res => res.json())
      .then(data =>
        this.setState({
          image_url: data.image_url,
          name: data.name,
          real_price: data.real_price,
          unit: data.unit,
        })
      );
  }
  render() {
    return (
      <div className="productDetail">
        <Image image={this.state.image_url} />
        <div className="productContent">
          <Title name={this.state.name} />
          <Content unit={this.state.unit} real_price={this.state.real_price} />
          {buttonInfo.map((elements, id) => (
            <Button
              key={id}
              id={id}
              text={elements.text}
              classN={elements.classN}
              buttonHandler={this.buttonHandler}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Layout;

const buttonInfo = [
  {
    text: '장바구니',
    classN: 'bascket',
  },
  {
    text: '구매',
    classN: 'buy',
  },
];
