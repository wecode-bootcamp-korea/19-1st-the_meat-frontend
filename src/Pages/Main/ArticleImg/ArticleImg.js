import React, { Component } from 'react';
import '../ArticleImg/ArticleImg.scss';
class ArticleImg extends Component {
  render() {
    return (
      <article className="articleImg">
        <img
          className="mainImg"
          src="/images/meatimg/beef.jpg"
          alt="메인 이미지"
        />
      </article>
    );
  }
}

export default ArticleImg;
