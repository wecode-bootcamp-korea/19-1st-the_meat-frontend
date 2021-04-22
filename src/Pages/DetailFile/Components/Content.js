import { Component } from 'react';
import './Content.scss';

class Content extends Component {
  render() {
    const { buttonHandler, real_price, unit, count } = this.props;
    return (
      <div className="contentComponent">
        <div className="productPrice">
          <span className="priceTitle">가격</span>
          <span className="price">{real_price}원</span>
        </div>
        <div className="productUnit">
          <span className="unitTitle">무게</span>
          <span className="unit">{unit}kg</span>
        </div>
        <div className="productQuantity">
          <span className="quantityTitle">수량</span>
          <button onClick={buttonHandler} className="minusButton">
            -
          </button>
          <span className="quantity">{count}</span>
          <button onClick={buttonHandler} className="plusButton">
            +
          </button>
        </div>
        <div className="total">
          <span className="totalTitle">합계</span>
          <span className="totalPrice">{Number(real_price) * count}원</span>
        </div>
      </div>
    );
  }
}

export default Content;
