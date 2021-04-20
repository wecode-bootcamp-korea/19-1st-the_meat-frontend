import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LeftSortBox from './Component/LeftSortBox';
import RightSortBox from './Component/RightSortBox';
import Product from './Component/Product';
// import ProductBoxSecond from './Component/ProductBoxSecond';
// import ProductBoxThird from './Component/ProductBoxThird';
// import NoproductMessage from './Component/NoproductMessage';

import './Category.scss';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
      display: false,
      productBoxData: [],
    };
  }

  componentDidMount() {
    console.log(123213);
    // fetch('http://10.58.2.57:8000/products/category/5')
    fetch('/data/ProductBoxData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          // productBoxData: data.MESSAGE,
          productBoxData: data,
        });
      });
  }

  goToMain = () => {
    this.history.push('/');
  };

  clickHandler = currentId => {
    this.setState({ currentId });
  };

  sortHandler = () => {
    this.setState({ display: !this.state.display });
  };

  render() {
    const { productBoxData } = this.state;
    console.log(this.state.productBoxData);
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
                  {LeftSortBox.map((category, id) => (
                    <li
                      className="categoryInner"
                      key={id}
                      onClick={() => this.clickHandler(id + 1)}
                    >
                      <span>{category.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lightCategoryTypeActive">
                <button className="rightSortText" onClick={this.sortHandler}>
                  인기순&nbsp;
                  <i className="fas fa-chevron-down"></i>
                </button>
                {this.state.display && (
                  <ul className="categorySort">
                    {RightSortBox.map((category, id) => (
                      <li
                        className=""
                        key={id}
                        onClick={() => this.clickHandler(id + 1)}
                      >
                        {category.content}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="productBody">
          {productBoxData.map((data, id) => {
            return <Product key={id} data={data} />;
          })}
        </div>
        {/* <div className="productBody">{MAPPING_OBJ[this.state.currentId]}</div> */}
      </div>
    );
  }
}

export default withRouter(Category);

// const MAPPING_OBJ = {
//   1: <Product />,
//   2: <ProductBoxSecond />,
//   3: <ProductBoxThird />,
//   4: <NoproductMessage />,
//   5: <NoproductMessage />,
//   6: <NoproductMessage />,
//   7: <NoproductMessage />,
//   8: <NoproductMessage />,
// };
