import { Component } from 'react';

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
