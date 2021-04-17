import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LeftSortBox from './Component/LeftSortBox';
import RightSortBox from './Component/RightSortBox';
import ProductBox from './Component/ProductBox';
import './Category.scss';

class Category extends Component {
  goToMain = () => {
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="category">
        <div className="categoryListWrap">
          <div className="categoryPageTitle">
            <div className="categoryTitle">
              <img src="/images/meatimg/cow.jpg" alt="cow img"></img>
            </div>
            <div className="sortBox">
              <div className="leftcategoryType">
                <ul className="categoryType">
                  {LeftSortBox.map((el, idx) => (
                    <li className="categoryInner" key={idx}>
                      <a href=" " onClick={this.goToMain}>
                        <span>{el.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lightCategoryType">
                <ul className="categorySort">
                  {RightSortBox.map((el, idx) => (
                    <li className="" key={idx}>
                      <a href=" " onClick={this.goToMain}>
                        {el.content}
                      </a>
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

export default withRouter(Category);
