import { Component } from 'react';
import './Menu.scss';

class Menu extends Component {
  render() {
    return (
      <div className="basketMenu">
        <div className="menuInfomation">제품정보</div>
        <div className="menuPrice">판매금액</div>
        <div className="menuCount">수량</div>
        <div className="menuAmount">구매금액</div>
      </div>
    );
  }
}

export default Menu;
