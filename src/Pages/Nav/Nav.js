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
            <Link to="/">
              <p className="myMeatCart">장바구니</p>
            </Link>
            <div className="cartCount">
              <p className="count">0</p>
            </div>
          </div>
        </div>
        <div className="navCategory">
          <div className="categoryLeft">
            <ul className="categoryLeftUl">
              <i className="fas fa-bars"></i>
              {CATEGORYLEFT.map((el, id) => (
                <li className="categoryLeftLi" key={id}>
                  <Link to="/" className="categoryLeftLink">
                    {el.content}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="categoryRight">
            <ul className="categoryRightUl">
              {CATEGORYRIGHT.map((el, id) => (
                <li className="categoryRightLi" key={id}>
                  <Link to="/" className="categoryRightLink">
                    {el.content}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;

const CATEGORYLEFT = [
  { id: 1, content: '카테고리' },
  { id: 2, content: '할인특가' },
  { id: 3, content: '신상품' },
  { id: 4, content: '베스트' },
  { id: 5, content: '더고기정육관' },
  { id: 6, content: '이달의맛집' },
  { id: 7, content: '7데이' },
  { id: 8, content: '정기식단' },
];

const CATEGORYRIGHT = [
  { id: 1, content: '로그인' },
  { id: 2, content: '회원가입' },
  { id: 3, content: '이벤트/혜택' },
];
