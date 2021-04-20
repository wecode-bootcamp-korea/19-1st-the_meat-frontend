import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Nav/NavCategory.scss';

class NavCategory extends Component {
  constructor() {
    super();
    this.state = {
      categoryData: [],
      isMouse: false,
    };
  }

  componentDidMount() {
    fetch('/data/CategoryList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          categoryData: data,
        });
      });
  }

  insideCategory = () => {
    this.setState({
      isMouse: true,
    });
    console.log('inside:', this.state.isMouse);
  };

  outsideCategory = () => {
    this.setState({
      isMouse: !this.state.isMouse,
    });
    console.log('outside:', this.state.isMouse);
  };

  render() {
    const { categoryData } = this.state;
    console.log('최종isMouse:', this.state.isMouse);
    return (
      <div className="navCategory">
        <div className="categoryLeft">
          <ul className="categoryLeftUl">
            <i className="fas fa-bars"></i>
            <li
              className="parentCategory"
              onMouseEnter={this.insideCategory}
              onMouseLeave={this.outsideCategory}
            >
              카테고리
            </li>
            {this.state.isMouse && (
              <div className="categoryBox">
                {categoryData.map((category, id) => (
                  <li key={id} className="category">
                    <img
                      className="categoryImg"
                      src={category.image}
                      alt="소고기"
                    />
                    {category.name}
                    <ul className="subCategoryBox">
                      {categoryData[0].subcategory.map((subcategory, id) => (
                        <li key={id} className="subCategory">
                          <Link to="/" className="subCategoryLink">
                            {subcategory.content}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </div>
            )}
            {CATEGORYLEFT.map((el, id) => (
              <li className="categoryLeftLi" key={id}>
                <Link to="/" className="categoryLeftLink">
                  {el.content}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="categoryRight">
          <ul className="categoryRightUl">
            {CATEGORYRIGHT.map((el, id) => (
              <li className="categoryRightLi" key={id}>
                <Link to="/" className="categoryRightLink">
                  {el.content}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default NavCategory;

const CATEGORYLEFT = [
  { id: 1, content: '할인특가' },
  { id: 2, content: '신상품' },
  { id: 3, content: '베스트' },
  { id: 4, content: '더고기정육관' },
  { id: 5, content: '이달의맛집' },
  { id: 6, content: '7데이' },
  { id: 7, content: '정기식단' },
];
const CATEGORYRIGHT = [
  { id: 1, content: '로그인' },
  { id: 2, content: '회원가입' },
  { id: 3, content: '이벤트/혜택' },
];
