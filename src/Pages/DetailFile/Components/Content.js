import { Component } from 'react';
import './Content.scss';

class Content extends Component {
  render() {
    return (
      <div className="contentComponent">
        <div className="productPrice">
          <span className="priceTitle">가격</span>
          <span className="price">{this.props.real_price}원</span>
        </div>
        <div className="productUnit">
          <span className="unitTitle">무게</span>
          <span className="unit">{this.props.unit}kg</span>
        </div>
        <div className="productQuantity">
          <span className="quantityTitle">수량</span>
          <button className="minusButton">-</button>
          <span className="quantity">1</span>
          <button className="plusButton">+</button>
        </div>
      </div>
    );
  }
}

export default Content;
