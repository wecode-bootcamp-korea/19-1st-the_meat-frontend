import { Component } from 'react';

import './ProductTag.scss';

export default class ProductTag extends Component {
  render() {
    const { discount_rate } = this.props;
    return (
      <>
        {Number(discount_rate) !== 0 && (
          <div className="tagSale">
            <div className="slaeText">
              <strong>{discount_rate}%</strong>
            </div>
          </div>
        )}
      </>
    );
  }
}
