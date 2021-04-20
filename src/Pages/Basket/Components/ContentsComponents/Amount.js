import { Component } from 'react';
import './Amount.scss';

class Amount extends Component {
  render() {
    return (
      <li className="contentsAmount">
        <h2 className="amount">100,000원</h2>
      </li>
    );
  }
}

export default Amount;
