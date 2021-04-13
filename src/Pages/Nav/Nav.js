import React, { Component } from 'react';
import './Nav.scss';
class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="navBox">
          <div className="navSearch">
            <input
              className="inputSearch"
              type="text"
              placeholder="이제, 장보기는 더고기&"
            ></input>
            <button className="navSearchButton">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="Logo">
            <img className="logoImg" src="/images/meatimg/MainLogo.jpg"></img>
          </div>
          <div className="myMeat">
            <i className="far fa-user"></i>
            <a className="myMeatLink" href="#">
              마이더고기
            </a>
            <i className="fas fa-shopping-cart"></i>
            <a className="myMeatCart" href="#">
              장바구니
            </a>
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
                  <a className="categoryLeftLink" href="#">
                    {el.content}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="categoryRight">
            <ul className="categoryRightUl">
              {CATEGORYRIGHT.map((el, id) => (
                <li className="categoryRightLi" key={id}>
                  <a className="categoryRightLink" href="#">
                    {el.content}
                  </a>
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
