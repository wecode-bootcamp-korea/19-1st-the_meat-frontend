import { Component } from 'react';

import './ProductImg.scss';

export default class ProductImg extends Component {
  render() {
    const { id, image_url, goToMain } = this.props;
    return (
      <div className="productImg">
        <img id={id} src={image_url} onClick={goToMain} alt="food img" />
      </div>
    );
  }
}
