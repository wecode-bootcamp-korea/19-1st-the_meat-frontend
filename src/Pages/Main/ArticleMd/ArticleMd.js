import React, { Component } from 'react';
import Card from '../Component/Card';
import { Link } from 'react-router-dom';
import './ArticleMd.scss';
class ArticleMd extends Component {
  constructor() {
    super();
    this.state = { cardData: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/Card.json', {
      method: 'GET',
    })
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
      <article className="articleMd">
        <div className="mdTitle">
          <p className="mdTitleName">MD 추천</p>
        </div>
        <div className="mdMiddleTitle">
          <ul className="middleUl">
            {MIDDLE.map((el, id) => (
              <li className="middleLi" key={id}>
                <Link to="/" className="middleLink" href="#">
                  {el.content}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mdContentsBox">
          {cardData.map((data, id) => {
            return <Card key={id} data={data} />;
          })}
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
