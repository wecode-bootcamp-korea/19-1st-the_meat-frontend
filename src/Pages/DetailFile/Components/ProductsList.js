import { Component } from 'react';
import './ProductList.scss';

class ProductsList extends Component {
  render() {
    return (
      <li className="productList">
        <img
          src="https://www.happy-ali.com/wp-content/uploads/2020/08/quokka1-1024x1024.jpg"
          className="productImg"
        />
        <h1 className="productTitle">쿼카짱</h1>
        <div className="productOption">
          <span className="productPrice">10000원</span>
          <button className="productBacket">🧺</button>
        </div>
      </li>
    );
  }
}

export default ProductsList;
