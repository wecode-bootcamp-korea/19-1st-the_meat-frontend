import { Component } from 'react';

import './CategoryImg.scss';

export default class CategoryImg extends Component {
  render() {
    const { image_url, goToMain } = this.props;
    return (
      <div className="productImg">
        <img src={image_url} onClick={goToMain} alt="food img" />
      </div>
    );
  }
}
