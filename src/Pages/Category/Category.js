import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LeftSortBox from './Component/LeftSortBox';
import RightSortBox from './Component/RightSortBox';
import Product from './Component/Product';
// import ProductBoxSecond from './Component/ProductBoxSecond';
// import ProductBoxThird from './Component/ProductBoxThird';
// import NoproductMessage from './Component/NoproductMessage';

import './Category.scss';

const LIMIT = 8;

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
    this.getAllCategoriesData();
  }

  getAllCategoriesData = () => {
    fetch('http://10.58.1.83:8000/products?category=소')
      // fetch('/data/ProductBoxData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          // productBoxData: data,
          productBoxData: data.result,
        });
      });
  };

  handleClick = id => {
    const offset = 2;
    // console.log(e.target.data.id);
    const query = `limit=${LIMIT}&offset=${offset}`;
    console.log(query);

    fetch(`http://10.58.1.83:8000/products?sub_category=${id}&&${query}`)
      // fetch(`http://localhost:3000/data/${query}.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productBoxData: data.result,
          // productBoxData: data,
        });
      });
    console.log('pass');
  };

  clickHandler = currentId => {
    this.setState({ currentId });
  };

  sortHandler = () => {
    this.setState({ display: !this.state.display });
  };

  render() {
    const { productBoxData } = this.state;
    console.log(this.handleClick);

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
                      // onClick={() => this.clickHandler(idx + 1)}
                      onClick={() =>
                        idx === 0
                          ? this.getAllCategoriesData()
                          : this.handleClick(category.name)
                      }
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
                    {RightSortBox.map((category, idx) => {
                      return (
                        <li
                          className=""
                          key={idx}
                          onClick={() => this.clickHandler(idx + 1)}
                        >
                          {category.content}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="productBody">
          {productBoxData.map((data, idx) => {
            return <Product key={idx} data={data} />;
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Category);
