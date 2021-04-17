import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import NavCategory from '../Nav/NavCategory';
import Banner from '../Main/Banner/Banner';
import ArticleMd from '../Main/ArticleMd/ArticleMd';
import ArticleDiscount from '../Main/ArticleDiscount/ArticleDiscount';
import ArticleNewProduct from '../Main/ArticleNewProduct/ArticleNewProduct';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <NavCategory />
        <Banner />
        <ArticleMd />
        <ArticleDiscount />
        <ArticleNewProduct />
      </div>
    );
  }
}

export default Main;
