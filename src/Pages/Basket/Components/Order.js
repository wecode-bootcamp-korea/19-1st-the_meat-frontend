import { Component } from 'react';
import './Order.scss';
class Order extends Component {
  render() {
    return (
      <div className="order">
        <div className="orderTitle">
          주문 합계금액
          <p>{this.props.orderAmount}원</p>
        </div>
        <button onClick={this.props.orderHandler} className="allOrder">
          주문하기
        </button>
      </div>
    );
  }
}

export default Order;
