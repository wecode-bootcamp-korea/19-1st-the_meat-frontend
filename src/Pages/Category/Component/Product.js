import { Component } from 'react';
import ProductTag from './ProductTag';
import ProductCart from './ProductCart';
import ProductImg from './ProductImg';
import ProductText from './ProductText';
import './Product.scss';

export default class Product extends Component {
  render() {
    const {
      id,
      name,
      price,
      discount_rate,
      real_price,
      image_url,
      goToMain,
    } = this.props.data;
    return (
      <div className="bodyCenter">
        <ul>
          <li className="prdBoxCenter" key={id}>
            <div className="prdBox">
              <div className="imgBox">
                <ProductTag discount_rate={discount_rate} />
                <ProductImg image_url={image_url} goToMain={goToMain} />
                <ProductCart goToMain={goToMain} />
              </div>
              <ProductText
                goToMain={goToMain}
                name={name}
                real_price={real_price}
                price={price}
              />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
