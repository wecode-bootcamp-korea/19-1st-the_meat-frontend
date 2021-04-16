import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Component/SmallCard.scss';

class SmallCard extends Component {
  render() {
    return (
      <div className="smallCard">
        <div className="dcCardImgBox">
          <span className="dcSale">
            <p className="dcNumber">8 %</p>
          </span>
          <img
            className="dcImg"
            src="/images/meatimg/abstract.jpg"
            alt="고기사진"
          />
        </div>
        <div className="dcInfo">
          <div className="dcInfoContent">
            <p className="dcName">엄청 엄청 엄청 뜨거운 고기 (100g)</p>
          </div>
          <div className="dcListPriceBox">
            <p className="dcListPrice">
              <span className="fontBold">10,900</span>원
            </p>
            <p className="dcListOriginal">11,900원</p>
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
