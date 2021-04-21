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
    console.log(sum);
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

//임시 목데이터
const testMok = [
  {
    id: 1,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff8%2F54%2F49%2Ff85449b90cb8cfb593fb4d8af5d80393.jpg&f=1&nofb=1',
    title: '세상에서 가장 귀여운 쿼카짱',
    price: 100000,
  },
  {
    id: 2,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fqpmvkp2g08441.jpg&f=1&nofb=1',
    title: '완전 귀여운 쿼카짱',
    price: 50000,
  },
  {
    id: 3,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fqpmvkp2g08441.jpg&f=1&nofb=1',
    title: '완전 귀여운 쿼카짱',
    price: 40000,
  },
];
