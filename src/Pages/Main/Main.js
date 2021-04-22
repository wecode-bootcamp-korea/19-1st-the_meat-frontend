import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import NavCategory from '../Nav/NavCategory';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <NavCategory />
      </div>
    );
  }
}

export default Main;
