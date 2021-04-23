import React, { Component } from 'react';
import Layout from './Components/Layout';
import './Basket.scss';
import Nav from '../Nav/Nav';
import NavCategory from '../Nav/NavCategory';
class Basket extends Component {
  render() {
    return (
      <div className="Basket">
        <Nav />
        <NavCategory />
        <Layout />
      </div>
    );
  }
}

export default Basket;
