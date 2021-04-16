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
    if (e.target.className === 'minusButton') {
      this.setState({
        count: this.state.count - 1,
      });
    }
    if (e.target.className === 'plusButton') {
      this.setState({
        count: this.state.count + 1,
      });
    }
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
    if (this.state.count < 0) {
      this.setState({
        count: 0,
      });
      alert('수량은 0이하로 안됩니다.');
    }
    return (
      <div className="productDetail">
        <Image image={this.state.image_url} />
        <div className="productContent">
          <Title name={this.state.name} />
          <Content
            buttonHandler={this.buttonHandler}
            unit={this.state.unit}
            real_price={this.state.real_price}
            count={this.state.count}
          />
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
