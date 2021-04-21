import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LeftSortBox from './Component/LeftSortBox';
import RightSortBox from './Component/RightSortBox';
import Product from './Component/Product';
// import ProductBoxSecond from './Component/ProductBoxSecond';
// import ProductBoxThird from './Component/ProductBoxThird';
import NoproductMessage from './Component/NoproductMessage';

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
    this.getProductBoxData();
  }

  // state/props 변경
  // componentDidUpdate(prevProps, prevState) {
  //   if() {
  //     this.getProductBoxData();
  //   }
  // }

  clickHandler = index => {
    if (index < 3) {
      fetch(`/data/ProductBoxData.json/`)
        // fetch(`http://10.58.2.57:8000/products?category/${index}`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            productBoxData: res.result,
            getProductBoxData: res,
          });
          this.setState({ currentId: index });
          return this.state.currentId > 3 ? <NoproductMessage /> : <Product />;
        });
    }
  };

  getProductBoxData = () => {
    // fetch('http://10.58.2.57:8000/products/category/5')
    fetch('/data/ProductBoxData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          // productBoxData: data.MESSAGE,
          productBoxData: data,
        });
      });
  };

  // goToMain = () => {
  //   this.history.push('/');
  // };

  clickHandler = currentId => {
    this.setState({ currentId });
  };

  sortHandler = () => {
    this.setState({ display: !this.state.display });
  };

  render() {
    // return this.state.currentId >3 ? <NoproductMessage/> : <Product/>
    const { productBoxData, display, currentId } = this.state;
    console.log(122323);
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
                      // onClick={() => this.clickHandler(id + 1)}
                      onClick={() => currentId}
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
                {display && (
                  <ul className="categorySort">
                    {RightSortBox.map((category, id) => (
                      <li
                        className=""
                        key={id}
                        onClick={() => this.sortHandler(id + 1)}
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
          {/* {MAPPING_OBJ[this.state.currentId]} */}
        </div>
        {/* <div className="productBody">{MAPPING_OBJ[this.state.currentId]}</div> */}
      </div>
    );
  }
}

export default withRouter(Category);

// const MAPPING_OBJ = {
//   1: <Product />,
//   2: <Product />,
//   3: <Product />,
//   4: <NoproductMessage />,
//   5: <NoproductMessage />,
//   6: <NoproductMessage />,
//   7: <NoproductMessage />,
//   8: <NoproductMessage />,
// };
