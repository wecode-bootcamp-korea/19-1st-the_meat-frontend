import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Component/SmallCard.scss';

class SmallCard extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="smallCard">
        <div className="dcCardImgBox">
          <span className="dcSale">
            <p className="dcNumber">{data.discount_rate} %</p>
          </span>
          <img className="dcImg" src={data.image_url} alt="고기사진" />
        </div>
        <div className="dcInfo">
          <div className="dcInfoContent">
            <p className="dcName">{data.name}</p>
          </div>
          <div className="dcListPriceBox">
            <p className="dcListPrice">
              <span className="fontBold">{data.real_price}</span>원
            </p>
            <p className="dcListOriginal">{data.price}원</p>
          </div>
          <div className="dcListCartButton">
            <Link to="/" className="cartLink">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallCard;
