import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Nav/NavCategory.scss';

class NavCategory extends Component {
  constructor() {
    super();
    this.state = { categoryData: [] };
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

  render() {
    const { categoryData } = this.state;
    console.log('현재categoryData:', categoryData);
    {
      categoryData[0] &&
        console.log('0번째', categoryData[0].subcategory[0].content);
    }
    return (
      <div className="navCategory">
        <div className="categoryLeft">
          <ul className="categoryLeftUl">
            <i className="fas fa-bars"></i>
            <li className="parentCategory">카테고리</li>
            <div className="categoryBox">
              {categoryData.map((category, id) => (
                <li key={id} className="category">
                  <Link to="/">
                    <img
                      className="categoryImg"
                      src={category.image}
                      alt="소고기"
                    />
                    {category.name}
                  </Link>
                  <ul className="subCategoryBox">
                    {categoryData[0].subcategory.map((subcategory, id) => (
                      <Link to="/">
                        <li key={id} className="subCategory">
                          {subcategory.content}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </li>
              ))}
            </div>
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
