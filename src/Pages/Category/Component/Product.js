import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ProductTag from './ProductTag';
import ProductCart from './ProductCart';
import ProductImg from './ProductImg';
import ProductText from './ProductText';
import './Product.scss';

class Product extends Component {
  goToDetail = () => {
    this.props.history.push('/detailfile');
  };

  render() {
    const {
      id,
      name,
      original_price,
      discount_rate,
      real_price,
      image_url,
      goToMain,
    } = this.props.data;

    // console.log('ddddd: ', this.props.data);

    return (
      <div className="bodyCenter">
        <ul>
          <li className="prdBoxCenter" key={id} onClick={this.goToDetail}>
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
                original_price={original_price}
                discount_rate={discount_rate}
              />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
export default withRouter(Product);
