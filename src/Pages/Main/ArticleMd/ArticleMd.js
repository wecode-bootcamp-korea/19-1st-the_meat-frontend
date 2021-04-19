import React, { Component } from 'react';
import Card from '../Component/Card';
import '../Component/CardOne.scss';
// import CardOne from '../Component/CardOne';
// import CardTwo from '../Component/CardTwo';
// import CardThree from '../Component/CardThree';
// import CardFour from '../Component/CardFour';
import './ArticleMd.scss';

class ArticleMd extends Component {
  constructor() {
    super();
    this.state = { cardData: [] };
  }

  componentDidMount() {
    fetch(`http://10.58.2.57:8000/products?category=${MDCATEGORY[0].name}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          cardData: data.result,
        });
      });
  }

  clickHandler = id => {
    // const { currentId } = this.state;
    // this.setState({ currentId: id });
    console.log(id);

    fetch(`http://10.58.2.57:8000/products?category=${MDCATEGORY[id].name}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.result);
        this.setState({
          cardData: data.result,
        });
      });
  };

  render() {
    // console.log(this.state.currentId);
    // console.log('sfsdfsdfs: ', MDCATEGORY[this.state.currentId].name);

    return (
      <article className="articleMd">
        <div className="mdTitle">
          <p className="mdTitleName">MD 추천</p>
        </div>
        <div className="mdMiddleTitle">
          <ul className="middleUl">
            {MDCATEGORY.map((category, id) => (
              <li
                className="middleLi"
                key={category.name}
                onClick={() => this.clickHandler(id)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="mdContentsBox">
          <div className="cardOne">
            {this.state.cardData.map((data, id) => {
              return <Card key={id} data={data} />;
            })}
          </div>
        </div>
      </article>
    );
  }
}

export default ArticleMd;

// const MAPPING_OBJ = {
//   1: <CardOne />,
//   2: <CardTwo />,
//   3: <CardThree />,
//   4: <CardFour />,
// };

const MDCATEGORY = [
  {
    id: 1,
    name: '소',
  },
  {
    id: 2,
    name: '돼지',
  },
  {
    id: 3,
    name: '말',
  },
  {
    id: 4,
    name: '양',
  },
];
