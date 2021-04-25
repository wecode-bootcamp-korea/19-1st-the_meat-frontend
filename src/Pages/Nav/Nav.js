import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="navBox">
          <div className="navSearch">
            <input
              className="inputSearch"
              type="text"
              placeholder="이제, 장보기는 더고기&"
            />
            <button className="navSearchButton">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="logo">
            <div className="mainLogo">
              <Link to="/">
                <img
                  className="logoImg"
                  src="/images/meatimg/MainLogo.jpg"
                  alt="로고 이미지"
                />
              </Link>
            </div>
          </div>
          <div className="myMeat">
            <i className="far fa-user"></i>
            <Link to="/">
              <p className="myMeatLink">마이더고기</p>
            </Link>
            <i className="fas fa-shopping-cart"></i>
            <Link to="/basket">
              <p className="myMeatCart">장바구니</p>
            </Link>
            <div className="cartCount">
              <p className="count">0</p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
