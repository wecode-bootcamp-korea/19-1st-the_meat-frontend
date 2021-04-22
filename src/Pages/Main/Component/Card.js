import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

class Card extends Component {
  render() {
    const { data } = this.props;
    console.log(data.original_price);
    return (
      <div className="mdContents">
        <div className="mdImgCartBox">
          {data.discount_rate !== 0 && (
            <span className="mdSale">
              <p className="mdDiscount">{data.discount_rate} %</p>
            </span>
          )}
          <img className="mdContentsImg" src={data.image_url} alt="추천상품" />
          <div className="mdCartButton">
            <Link to="/" className="cartLink">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>
        </div>
        <div className="mdInfo">
          <div className="mdSubjectBox">
            <p className="mdSubject">{data.name}</p>
          </div>
          <div className="mdPriceBox">
            <p className="mdPrice">
              <span className="fontBold">
                {data.real_price.toLocaleString()}
              </span>
              원
            </p>
            {data.original_price !== 0 && (
              <span className="priceDiscount">
                {data.original_price.toLocaleString()}원
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
