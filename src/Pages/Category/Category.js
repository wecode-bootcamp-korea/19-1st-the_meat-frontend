import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LeftSortBox from './Component/LeftSortBox';
import RightSortBox from './Component/RightSortBox';
import ProductBox from './Component/ProductBox';
import ProductBoxSecond from './Component/ProductBoxSecond';
import ProductBoxThird from './Component/ProductBoxThird';
import NoproductMessage from './Component/NoproductMessage';
import './Category.scss';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
    };
  }

  clickHandler = currentId => {
    this.setState({ currentId });
  };

  sortHandler = sortId => {
    console.log(this.sortHandler);
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
                  {LeftSortBox.map((category, idx) => (
                    <li
                      className="categoryInner"
                      key={idx}
                      onClick={() => this.clickHandler(idx + 1)}
                    >
                      <span>{category.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lightCategoryTypeActive">
                <div className="rightSortText" onClick={this.sortHandler}>
                  인기순&nbsp;
                  <i class="fas fa-chevron-down"></i>
                </div>
                <ul className="categorySort">
                  {RightSortBox.map((category, idx) => (
                    <li
                      className=""
                      key={idx}
                      onClick={() => this.clickHandler(idx + 1)}
                    >
                      {category.content}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {MAPPING_OBJ[this.state.currentId]}
      </div>
    );
  }
}

export default withRouter(Category);

const MAPPING_OBJ = {
  1: <ProductBox />,
  2: <ProductBoxSecond />,
  3: <ProductBoxThird />,
  4: <NoproductMessage />,
  5: <NoproductMessage />,
  6: <NoproductMessage />,
  7: <NoproductMessage />,
  8: <NoproductMessage />,
};
