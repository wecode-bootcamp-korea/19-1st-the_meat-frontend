import { Component } from 'react';
import './CategoryText.scss';

export default class CategoryText extends Component {
  render() {
    const { name, price, real_price, goToMain } = this.props;
    return (
      <div className="prdInfo" onClick={goToMain}>
        <p className="prdName">{name} </p>
        <div className="PriceBox">
          <div className="realPrice">
            <strong>{real_price}</strong>
            <span className="won">원</span>
          </div>
          {!!price && (
            <div className="price">
              <strong>{price}</strong>
              <span className="won">원</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
