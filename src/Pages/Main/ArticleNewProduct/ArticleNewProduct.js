import React, { Component } from 'react';
import Card from '../Component/Card';
import '../ArticleNewProduct/ArticleNewProduct.scss';

class ArticleNewProduct extends Component {
  constructor() {
    super();
    this.state = { cardData: [] };
  }

  componentDidMount() {
    fetch('/data/CardNew.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          cardData: data,
        });
      });
  }

  render() {
    const { cardData } = this.state;
    return (
      <div className="articleNewProduct">
        <div className="articleNewProductBox">
          <p className="newProductTitle">신상품</p>
          <div className="newProductCardBox">
            {cardData.map((data, id) => {
              return <Card key={id} data={data} />;
            })}
            <button className="leftButton" onClick={this.leftClick}>
              <i className="fas fa-angle-left"></i>
            </button>
            <button className="rightButton" onClick={this.rightClick}>
              <i className="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleNewProduct;
