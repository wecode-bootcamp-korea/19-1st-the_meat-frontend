import { Component } from 'react';

import './ProductTag.scss';

export default class ProductTag extends Component {
  render() {
    const { discount_rate } = this.props;
    return (
      <>
        {!!discount_rate && (
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
