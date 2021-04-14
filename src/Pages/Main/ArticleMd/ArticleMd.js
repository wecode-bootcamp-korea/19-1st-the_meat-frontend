import React, { Component } from 'react';
import './ArticleMd.scss';
class ArticleMd extends Component {
  render() {
    return (
      <article className="articleMd">
        <div className="mdTitle">
          <p className="mdTitleName">MD 추천</p>
        </div>
        <div className="mdMiddleTitle">
          <ul className="middleUl">
            {MIDDLE.map((el, id) => (
              <li className="middleLi" key={id}>
                <a className="middleLink" href="#">
                  {el.content}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mdContentsBox">
          <div className="mdContents">
            <div className="mdImgCartBox">
              <span className="mdSale">
                <p className="mdDiscount">
                  20 %
                  {/* {this.props.data.discount ? this.props.data.discount : null} */}
                </p>
              </span>
              <img
                className="mdContentsImg"
                src="/images/meatimg/pig.jpg"
                alt="추천상품"
              />
              <div className="mdCartButton">
                <a className="cartLink" href="#">
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div className="mdInfo">
              <div className="mdSubjectBox">
                <p className="mdSubject">당근은 왜 고기를 감싸고 있을까?</p>
              </div>
              <div className="mdPriceBox">
                <p className="mdPrice">
                  <span className="fontBold">6,380</span>원
                </p>
                <span className="priceDiscount">7,980원</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default ArticleMd;

const MIDDLE = [
  { id: 1, content: '오늘은 이거 어때요?' },
  { id: 2, content: '느리게 만든 감칠맛' },
  { id: 3, content: '오늘은 고기 굽는날!' },
  { id: 4, content: '고기는 언제나 옳다' },
];
