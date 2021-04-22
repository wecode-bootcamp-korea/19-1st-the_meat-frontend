import { Component } from 'react';
import Order from './Order';
import Contents from './Contents';

class Form extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    fetch('http://10.58.6.101:8000/orders/cart', {})
      .then(res => res.json())
      .then(data =>
        this.setState({
          data: data.result,
          sum: data.sum,
        })
      ); // 카트 받아오기
  }

  deleteHandler = id => {
    fetch('http://10.58.6.101:8000/orders/cart', {
      method: 'PUT',
      body: JSON.stringify({
        user_id: 1,
        id: id,
      }), //장바구니 삭제
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          data: data.message,
          sum: data.sum,
        })
      );
  };
  updateCountSum = sum => {
    this.setState({
      sum: sum,
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="basketForm">
        {data !== undefined &&
          data.map((elements, id) => (
            <Contents
              key={id}
              id={elements.id}
              title={elements.name}
              count={elements.quantity}
              image={elements.image_url}
              price={elements.real_price}
              deleteHandler={this.deleteHandler}
              updateCountSum={this.updateCountSum}
            />
          ))}
        <Order orderAmount={this.state.sum} />
      </div>
    );
  }
}

export default Form;
