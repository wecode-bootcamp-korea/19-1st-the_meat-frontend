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
      detailData: {},
      count: 1,
      current: 0,
    };
  }
  // componentDidMount() { 백이랑 연결 테스트중
  //   fetch(`http://10.58.3.1:8000/products/detail/${this.state.current}`, {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  // }
  componentDidUpdate() {
    if (this.state.count < 0) {
      this.setState({
        count: 0,
      });
      alert('수량은 0이하로 안됩니다.');
    }
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
          detailData: data,
        })
      );
  }

  render() {
    return (
      <div className="productDetail">
        <Image image={this.state.detailData.image_url} />
        <div className="productContent">
          <Title name={this.state.detailData.name} />
          <Content
            buttonHandler={this.buttonHandler}
            unit={this.state.detailData.unit}
            real_price={this.state.detailData.real_price}
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
