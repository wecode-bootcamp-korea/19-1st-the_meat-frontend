import React, { Component } from 'react';
import Card from '../Component/Card';
import '../ArticleNewProduct/ArticleNewProduct.scss';
import { API } from '../../../config';
class ArticleNewProduct extends Component {
  constructor() {
    super();
    this.state = { cardData: [] };
  }

  componentDidMount() {
    fetch(`${API}/products?new=1`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          cardData: data.result,
        });
      });
  }

  basketHandler = e => {
    fetch(`${API}/orders/cart`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: 1,
        quantity: 1,
        id: e.target.id,
      }),
    })
      .then(res => res.json())
      .then(error => console.log(error));
  };

  render() {
    const { cardData } = this.state;
    return (
      <div className="articleNewProduct">
        <div className="articleNewProductBox">
          <p className="newProductTitle">신상품</p>
          <div className="newProductCardBox">
            {cardData.map((data, id) => {
              return (
                <Card
                  basketHandler={this.basketHandler}
                  id={data.id}
                  key={id}
                  data={data}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleNewProduct;
