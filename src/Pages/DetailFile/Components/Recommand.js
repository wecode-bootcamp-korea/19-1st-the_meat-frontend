import { Component } from 'react';
import ProductsList from './ProductsList';
import './Recommand.scss';

class Recommand extends Component {
  render() {
    return (
      <div className="recommandProducts">
        <h1 className="recommandTitle">추천제품</h1>
        <ul className="recommandProductList">
          <ProductsList />
          <ProductsList />
          <ProductsList />
          <ProductsList />
          <ProductsList />
          <ProductsList />
          <ProductsList />
          <ProductsList />
        </ul>
      </div>
    );
  }
}

export default Recommand;
