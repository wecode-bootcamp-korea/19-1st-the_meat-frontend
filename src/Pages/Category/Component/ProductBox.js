import { Component } from 'react';

import './ProductBox.scss';

class ProductBox extends Component {
  constructor() {
    super();
    this.state = { PrdBoxData: [] };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/ProductBoxData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          PrdBoxData: data,
        });
      });
  }
  render() {
    const { PrdBoxData } = this.state;
    console.log(PrdBoxData);
    return (
      <div className="bodyCenter">
        <ul>
          {PrdBoxData.map((el, id) => (
            <li className="prdBoxCenter">
              <div className="prdBox" key={id}>
                <div className="imgBox">
                  <a href=" ">
                    {!!el.discount_rate && (
                      <div className="tagSale">
                        <div className="slaeText">
                          <strong>{el.discount_rate}%</strong>
                        </div>
                      </div>
                    )}
                    <img src={el.image_url} alt="food img"></img>
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
                    <p className="prdName">{el.name}</p>
                    <div className="PriceBox">
                      <div className="realPrice">
                        <strong>{el.real_price}</strong>
                        <span className="won">원</span>
                      </div>
                      {!!el.price && (
                        <div className="price">
                          <strong>{el.price}</strong>
                          <span className="won">원</span>
                        </div>
                      )}
                    </div>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductBox;
