import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ProductTag from './ProductTag';
import ProductCart from './ProductCart';
import ProductImg from './ProductImg';
import ProductText from './ProductText';
import './Product.scss';

class Product extends Component {
  goToDetail = e => {
    console.log(e.target.id);
    this.props.history.push('/detailfile/');
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

    return (
      <div className="bodyCenter">
        <ul>
          <li className="prdBoxCenter" key={id}>
            <div className="prdBox">
              <div className="imgBox">
                <ProductTag discount_rate={discount_rate} />
                <ProductImg
                  id={this.props.id}
                  goToMain={this.goToDetail}
                  image_url={image_url}
                />
                <ProductCart
                  basketHandler={this.props.basketHandler}
                  id={this.props.id}
                />
              </div>
              <ProductText
                goToMain={this.goToDetail}
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
