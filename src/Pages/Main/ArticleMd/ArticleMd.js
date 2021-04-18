import React, { Component } from 'react';
import CardOne from '../Component/CardOne';
import CardTwo from '../Component/CardTwo';
import './ArticleMd.scss';

class ArticleMd extends Component {
  constructor() {
    super();
    this.state = { currentId: 1 };
  }

  clickHandler = id => {
    this.setState({ currentId: id });
  };

  render() {
    console.log(this.state.currentId);

    return (
      <article className="articleMd">
        <div className="mdTitle">
          <p className="mdTitleName">MD 추천</p>
        </div>
        <div className="mdMiddleTitle">
          <ul className="middleUl">
            {MDCATEGORY.map((category, id) => (
              <li
                className="middleLi"
                key={category}
                onClick={() => this.clickHandler(id + 1)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="mdContentsBox">
          <CardOne />
          <CardTwo />
        </div>
      </article>
    );
  }
}

export default ArticleMd;

const MDCATEGORY = [
  '오늘은 이거 어때요?',
  '맛있는 고기 반찬',
  '오늘은 고기 굽는날!',
  '고기는 언제나 옳다',
];
