import { Component } from 'react';
// import './prdBox.scss';

class Category prdBox Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <div className="prdBox">
              <div className="imgBox">
                <div className="cartBox">
                  <a href="#">
                    <i class="ico-cart2"></i>
                    "장바구니"
                  </a>
                </div>
                <a href="#">
                  <img src=""></img>
                  <span className="tagSale">
                    <span></span>
                    <strong>25</strong>
                    "%"
                  </span>
                </a>
              </div>
              <div className="prdInfo">
                <a href="">
                  <p className="prdName">진아가 좋아하는 차돌박이</p>
                  <div className="realPrice">
                    <p>
                      <strong>9,000</strong>
                      <span className="won">원</span>
                    </p>
                    <p className="price">
                      "10,000"
                      <span className="won">원</span>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default prdBox;