import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LeftSortBox from './Component/LeftSortBox';
import RightSortBox from './Component/RightSortBox';
import Product from './Component/Product';
import { API } from '../../config';
import './Category.scss';
import Nav from '../Nav/Nav';
import NavCategory from '../Nav/NavCategory';
const LIMIT = 8;

class Category extends Component {
  constructor() {
    super();
    this.state = {
      display: false,
      productBoxData: [],
    };
  }

  componentDidMount() {
    this.getAllCategoriesData();
  }

  getAllCategoriesData = () => {
    fetch(`${API}/products?category=소`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productBoxData: data.result,
        });
      });
  };

  handleClick = id => {
    const offset = 2;
    const query = `limit=${LIMIT}&offset=${offset}`;
    fetch(`${API}/products?sub_category=${id}&&${query}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productBoxData: data.result,
        });
      });
  };

  clickHandler = filter => {
    fetch(`${API}/products/filter?category=소&filter=${filter}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productBoxData: data.result,
        });
      });
  };

  sortHandler = () => {
    this.setState({ display: !this.state.display });
  };

  basketHandler = e => {
    fetch(`${API}/orders/cart`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: 1,
        quantity: 1,
        id: e.target.id,
      }),
    })
      .then(res => res.json())
      .then(error => console.log(error));
  };

  render() {
    const { productBoxData } = this.state;
    return (
      <div className="category">
        <Nav />
        <NavCategory />
        <div className="categoryListWrap">
          <div className="categoryPageTitle">
            <div className="categoryTitle">
              <img src="/images/meatimg/cow.jpg" alt="cow img" />
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
            return (
              <Product
                basketHandler={this.basketHandler}
                id={data.id}
                key={idx}
                data={data}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Category);
