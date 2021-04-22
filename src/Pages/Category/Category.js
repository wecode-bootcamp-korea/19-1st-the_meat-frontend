import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LeftSortBox from './Component/LeftSortBox';
import RightSortBox from './Component/RightSortBox';
import Product from './Component/Product';

import './Category.scss';

const LIMIT = 8;

class Category extends Component {
  constructor() {
    super();
    this.state = {
      // currentId: 1,
      display: false,
      productBoxData: [],
    };
  }

  componentDidMount() {
    this.getAllCategoriesData();
  }

  getAllCategoriesData = () => {
    fetch(`http://10.58.5.64:8000/products?category=소`)
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
    const query = `limit=${LIMIT}&offset=${offset}`;

    fetch(`http://10.58.5.64:8000/products?sub_category=${id}&&${query}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productBoxData: data.result,
          // productBoxData: data,
        });
      });
  };

  clickHandler = filter => {
    fetch(
      `http://10.58.5.64:8000/products/filter?category=소&content=${filter}`
    )
      // fetch('/data/ProductBoxData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productBoxData: data.result,
          // productBoxData: data,
        });
      });
  };

  sortHandler = () => {
    this.setState({ display: !this.state.display });
  };

  render() {
    const { productBoxData } = this.state;

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
                    {RightSortBox.map((category, id) => {
                      return (
                        <li
                          className=""
                          key={id}
                          onClick={() => this.clickHandler(category.filter)}
                        >
                          {category.filter}
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
