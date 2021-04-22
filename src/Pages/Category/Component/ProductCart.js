import { Component } from 'react';
import './ProductCart.scss';

export default class ProductCart extends Component {
  render() {
    const { goToMain } = this.props;
    return (
      <div className="cartBox">
        <div className="cartCircle">
          <i className="fas fa-shopping-cart" onClick={goToMain}></i>
        </div>
      </div>
    );
  }
}
