import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './ProductBox.scss';

class ProductBoxThird extends Component {
  constructor() {
    super();
    this.state = { ProductBoxData: [] };
  }

  goToMain = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/ProductBoxDataThird.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          ProductBoxData: data,
        });
      });
  }
  render() {
    const { ProductBoxData } = this.state;
    return (
      <div className="bodyCenter">
        <ul>
          {ProductBoxData.map((el, idx) => (
            <li className="prdBoxCenter">
              <div className="prdBox" key={idx}>
                <div className="imgBox">
                  <a href=" " onClick={this.goToMain}>
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
                        <a href=" " onClick={this.goToMain}>
                          <i class="fas fa-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="prdInfo">
                  <a href=" " onClick={this.goToMain}>
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

export default withRouter(ProductBoxThird);
