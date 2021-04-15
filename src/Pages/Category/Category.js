import React, { Component } from 'react';
import LeftSortBox from './Component/LeftSortBox';
import RightSortBox from './Component/RightSortBox';
import ProductBox from './Component/ProductBox';
// import PrdBoxData from './PrdBoxData';
import './Category.scss';

class Category extends Component {
  render() {
    return (
      <div className="Category">
        <div className="ctgListWrap">
          <div className="ctgPageTitle">
            <div className="ctgTitle">
              <img src="/images/meatimg/cow.jpg" alt="cow img"></img>
            </div>
            <div className="sortBox">
              <div className="LeftCtgType">
                <ul className="ctgType">
                  {LeftSortBox.map((el, id) => (
                    <li className="ctgInner" key={id}>
                      <a href=" ">
                        <span>{el.content}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="LightCtgType">
                <ul className="ctgSort">
                  {RightSortBox.map((el, id) => (
                    <li className="" key={id}>
                      <a href=" ">{el.content}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ProductBox />
      </div>
    );
  }
}

export default Category;
