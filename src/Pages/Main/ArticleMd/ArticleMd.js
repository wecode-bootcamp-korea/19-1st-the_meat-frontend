import React, { Component } from 'react';
import Card from '../Component/Card';
import './ArticleMd.scss';
import { API } from '../../../config';
class ArticleMd extends Component {
  constructor() {
    super();
    this.state = { cardData: [], handleClass: true, handleId: '' };
  }

  componentDidMount() {
    fetch(`${API}/products?pick=${MDCATEGORY[0].name}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          cardData: data.result,
        });
      });
  }

  clickHandler = id => {
    fetch(`${API}/products?pick=${MDCATEGORY[id].name}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          cardData: data.result,
        });
      });
    this.toggleClass(id);
  };

  toggleClass(id) {
    this.setState({
      handleId: id + 1,
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
    return (
      <article className="articleMd">
        <div className="mdTitle">
          <p className="mdTitleName">MD 추천</p>
        </div>
        <div className="mdMiddleTitle">
          <ul className="middleUl">
            {MDCATEGORY.map((category, id) => (
              <li
                className={
                  this.state.handleClass && this.state.handleId === category.id
                    ? 'middleChange'
                    : 'middleLi'
                }
                key={category.name}
                onClick={() => this.clickHandler(id)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="mdContentsBox">
          <div className="cardOne">
            {this.state.cardData.map((data, id) => {
              return (
                <Card
                  basketHandler={this.basketHandler}
                  key={id}
                  data={data}
                  id={data.id}
                />
              );
            })}
          </div>
        </div>
      </article>
    );
  }
}
export default ArticleMd;

const MDCATEGORY = [
  {
    id: 1,
    name: '소',
  },
  {
    id: 2,
    name: '돼지',
  },
  {
    id: 3,
    name: '닭',
  },
  {
    id: 4,
    name: '양',
  },
];
