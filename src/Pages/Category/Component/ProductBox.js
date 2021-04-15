import { Component } from 'react';
import './ProductBox.scss';

class ProductBox extends Component {
  render() {
    return (
      <div className="bodyCenter">
        <ul>
          <li className="prdBoxCenter">
            <div className="prdBox">
              <div className="imgBox">
                <a href=" ">
                  <div className="tagSale">
                    <div className="slaeText">
                      <strong>10</strong>
                      <strong>%</strong>
                    </div>
                  </div>
                  <img src="/images/meatimg/food.jpg" alt="food img"></img>
                  <div className="cartBox">
                    <div className="cartCircle">
                      <a href="http://www.naver.com">
                        <i class="fas fa-shopping-cart"></i>
                      </a>
                    </div>
                  </div>
                </a>
              </div>
              <div className="prdInfo">
                <a href=" ">
                  <p className="prdName">[고기반찬] 진아가 좋아하는 차돌박이</p>
                  <div className="PriceBox">
                    <div className="realPrice">
                      <strong>9,000</strong>
                      <span className="won">원</span>
                    </div>
                    <div className="price">
                      <strong>10,000</strong>
                      <span className="won">원</span>
                    </div>
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

export default ProductBox;
