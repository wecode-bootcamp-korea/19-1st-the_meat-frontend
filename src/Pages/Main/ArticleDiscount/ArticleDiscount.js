import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ArticleDiscount.scss';
class ArticleDiscount extends Component {
  render() {
    return (
      <div className="articleDiscount">
        <div className="articleDiscountBox">
          <div className="discountContents">
            <div className="discountTitle">
              <p className="discountTitleName">할인 특가</p>
            </div>
            <div className="discountContentsBox">
              <div className="saleBox">
                <div className="saleImgBox">
                  <span className="dcSale">
                    <p className="dcPercent">15 %</p>
                  </span>
                  <img
                    className="dcImg"
                    src="./images/meatimg/roastPork.jpg"
                    alt="할인 고기"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleDiscount;
