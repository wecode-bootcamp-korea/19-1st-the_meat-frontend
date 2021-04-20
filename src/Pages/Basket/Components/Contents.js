import { Component } from 'react';
import Image from './ContentsComponents/Image';
import Title from './ContentsComponents/Title';
import Price from './ContentsComponents/Price';
import Count from './ContentsComponents/Count';
import Amount from './ContentsComponents/Amount';
import './Contents.scss';

class Contents extends Component {
  render() {
    return (
      <ul className="basketContents">
        <Image />
        <Title />
        <Price />
        <Count />
        <Amount />
      </ul>
    );
  }
}

export default Contents;
