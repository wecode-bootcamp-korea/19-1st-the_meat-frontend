import React, { Component } from 'react';
import Card from '../Component/Card';
import './ArticleMd.scss';

class ArticleMd extends Component {
  constructor() {
    super();
    this.state = { cardData: [], handleClass: true, handleId: '' };
  }

  componentDidMount() {
    fetch(`http://10.58.1.83:8000/products?pick=${MDCATEGORY[0].name}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          cardData: data.result,
        });
      });
  }

  clickHandler = id => {
    console.log('changeClass:', this.state.handleClass);
    fetch(`http://10.58.1.83:8000/products?pick=${MDCATEGORY[id].name}`)
      .then(res => res.json())
      .then(
        data => {
          this.setState({
            cardData: data.result,
          });
        },
        () => this.toggleClass(id)
      );
  };

  toggleClass(id) {
    console.log('handleId:', this.state.handleId);
    this.setState({
      handleId: id,
    });
  }

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
                  this.state.handleClass && this.state.handleId === id
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
              return <Card key={id} data={data} />;
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
    name: '말',
  },
  {
    id: 4,
    name: '양',
  },
];
