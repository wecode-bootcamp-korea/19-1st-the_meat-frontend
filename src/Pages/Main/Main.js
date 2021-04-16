import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Banner from '../Main/Banner/Banner';
import ArticleMd from '../Main/ArticleMd/ArticleMd';
import ArticleDiscount from '../Main/ArticleDiscount/ArticleDiscount';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <Banner />
        <ArticleMd />
        <ArticleDiscount />
      </div>
    );
  }
}

export default Main;
