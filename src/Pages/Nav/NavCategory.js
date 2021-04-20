import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Nav/NavCategory.scss';

class NavCategory extends Component {
  constructor() {
    super();
    this.state = {
      categoryData: [],
      handleSub: false,
      index: '',
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

  insideCategory = e => {
    console.log(e.target.id);
    this.setState({
      handleSub: true,
      index: e.target.id,
    });
  };

  outsideCategory = () => {
    this.setState({
      handleSub: false,
    });
  };

  render() {
    const { categoryData, handleSub } = this.state;
    return (
      <div className="navCategory">
        <div className="categoryLeft">
          <ul className="categoryLeftUl">
            <i className="fas fa-bars"></i>
            <li className="parentCategory" onMouseEnter={this.insideCategory}>
              카테고리
            </li>
            {handleSub && (
              <div className="categoryBox">
                {categoryData.map(category => (
                  <li
                    key={category.id}
                    id={category.id}
                    className="category"
                    onMouseEnter={this.insideCategory}
                  >
                    <img
                      className="categoryImg"
                      src={category.image}
                      alt="소고기"
                    />
                    {category.name}
                    {categoryData[this.state.index] && (
                      <ul className="subCategoryBox">
                        {categoryData[this.state.index - 1].subcategory.map(
                          subcategory => (
                            <li
                              key={subcategory.subcategoryid}
                              className="subCategory"
                            >
                              <Link to="/" className="subCategoryLink">
                                {subcategory.content}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    )}
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
