import React, { Component } from 'react';
import './ArticleMd.scss';
class ArticleMd extends Component {
  render() {
    return (
      <article className="articleMd">
        <div className="mdTitle">
          <p className="mdTitleName">MD 추천</p>
        </div>
        <div className="mdMiddleTitle">
          <ul className="middleUl">
            {MIDDLE.map((el, id) => (
              <li className="middleLi" key={id}>
                <a className="middleLink" href="#">
                  {el.content}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </article>
    );
  }
}

export default ArticleMd;

const MIDDLE = [
  { id: 1, content: '오늘은 이거 어때요?' },
  { id: 2, content: '느리게 만든 감칠맛' },
  { id: 3, content: '오늘은 고기 굽는날!' },
  { id: 4, content: '고기는 언제나 옳다' },
];
