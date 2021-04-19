import { Component } from 'react';
import './ProductList.scss';

class ProductsList extends Component {
  render() {
    const { img, name, id, price } = this.props;
    return (
      <li id={id} className="productList">
        <img src={img} className="productImg" />
        <h1 className="productTitle">{name}</h1>
        <div className="productOption">
          <span className="productPrice">{price}</span>
          <button className="productBacket">🧺</button>
        </div>
      </li>
    );
  }
}

export default ProductsList;
