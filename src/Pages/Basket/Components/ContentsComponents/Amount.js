import { Component } from 'react';

class Amount extends Component {
  render() {
    const { price, count } = this.props;
    return (
      <li className="contentsAmount">
        <h2 className="amount">{price * count}원</h2>
      </li>
    );
  }
}

export default Amount;
