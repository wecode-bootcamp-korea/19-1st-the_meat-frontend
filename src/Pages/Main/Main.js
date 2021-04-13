import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import ArticleImg from '../Main/ArticleImg/ArticleImg';
import ArticleMd from '../Main/ArticleMd/ArticleMd';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <ArticleImg />
        <ArticleMd />
      </div>
    );
  }
}

export default Main;
