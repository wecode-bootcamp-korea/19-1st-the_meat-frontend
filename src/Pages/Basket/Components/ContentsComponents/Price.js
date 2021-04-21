import { Component } from 'react';
import './Price.scss';

class Price extends Component {
  render() {
    return (
      <li className="contentsPrice">
        <p>{Number(this.props.price)}원</p>
      </li>
    );
  }
}

export default Price;
