import { Component } from 'react';
import CategoryTag from './CategoryTag';
import CategoryCart from './CategoryCart';
import CategoryImg from './CategoryImg';
import CategoryText from './CategoryText';
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
                <CategoryTag discount_rate={discount_rate} />
                <CategoryImg image_url={image_url} goToMain={goToMain} />
                <CategoryCart goToMain={goToMain} />
              </div>
              <CategoryText
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
