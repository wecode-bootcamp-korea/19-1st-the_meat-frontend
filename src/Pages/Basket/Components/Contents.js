import { Component } from 'react';
import Image from './ContentsComponents/Image';
import Title from './ContentsComponents/Title';
import Price from './ContentsComponents/Price';
import Count from './ContentsComponents/Count';
import Amount from './ContentsComponents/Amount';
import './Contents.scss';

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  updateCount = a => {
    // this.setState({
    //   count: this.state.count + 1,
    // });
    console.log(a);
  };
  render() {
    return (
      <ul className="basketContents">
        <Image />
        <Title />
        <Price />
        <Count updateCount={this.updateCount} />
        <Amount />
      </ul>
    );
  }
}

export default Contents;
