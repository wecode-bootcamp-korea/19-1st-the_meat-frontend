import React, { Component } from 'react';
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
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleDiscount;
