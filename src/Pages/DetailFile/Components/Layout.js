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
      count: 1,
      current: 0,
    };
  }
  componentDidMount() {
    //백이랑 연결 테스트중
    fetch(`http://10.58.6.181:8000/products/${this.state.current}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          data: data.result,
        })
      );
  }
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
    if (e.target.className === 'bascket') {
      fetch(`http://10.58.6.181:8000/orders/cart`, {
        method: 'POST',
        body: JSON.stringify({
          user_id: 1,
          quantity: this.state.count,
          id: this.state.data.id,
        }),
      })
        .then(res => res.json())
        .then(error => console.log(error));
    }
  };

  render() {
    const { data } = this.state;
    return (
      data !== undefined && (
        <div className="productDetail">
          <Image image={this.state.data.image_url} />
          <div className="productContent">
            <Title name={data.name} />
            <Content
              buttonHandler={this.buttonHandler}
              unit={data.unit}
              real_price={data.real_price}
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
      )
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
