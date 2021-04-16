import React, { Component } from 'react';
import SmallCard from '../Component/SmallCard';
import { Link } from 'react-router-dom';
import './ArticleDiscount.scss';
class ArticleDiscount extends Component {
  constructor() {
    super();
    this.state = { cardListData: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/CardList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          cardListData: data,
        });
      });
  }
  render() {
    const { cardListData } = this.state;
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
                  />
                </div>
                <div className="dcInfo">
                  <p className="dcName">엄청 큰 고기 1KG</p>
                  <div className="dcPriceBox">
                    <p className="dcPrice">
                      <span className="fontBold">12,000</span>원
                    </p>
                    <p className="originalPrice">13,500원</p>
                  </div>
                  <div className="dcCartButton">
                    <Link to="/">
                      <i className="fas fa-shopping-cart"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="dcCardBox">
                {cardListData.map((data, id) => {
                  return <SmallCard key={id} data={data} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleDiscount;
