import { Component } from 'react';
import './ProductText.scss';

export default class ProductText extends Component {
  render() {
    const {
      name,
      original_price,
      real_price,
      goToMain,
      discount_rate,
    } = this.props;

    return (
      <div className="prdInfo" onClick={goToMain}>
        <p className="prdName">{name} </p>
        <div className="PriceBox">
          <div className="realPrice">
            <strong>{real_price.toLocaleString()}</strong>
            <span className="won">원</span>
          </div>
          {discount_rate !== 0 && (
            <div className="price">
              <strong>{original_price.toLocaleString()}</strong>
              <span className="won">원</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
