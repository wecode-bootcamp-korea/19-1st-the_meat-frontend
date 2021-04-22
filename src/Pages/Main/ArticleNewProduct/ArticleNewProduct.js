import React, { Component } from 'react';
import Card from '../Component/Card';
import '../ArticleNewProduct/ArticleNewProduct.scss';

class ArticleNewProduct extends Component {
  constructor() {
    super();
    this.state = { cardData: [] };
  }

  componentDidMount() {
    fetch('http://10.58.5.64:8000/products?new=1')
      .then(res => res.json())
      .then(data => {
        this.setState({
          cardData: data.result,
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
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleNewProduct;
