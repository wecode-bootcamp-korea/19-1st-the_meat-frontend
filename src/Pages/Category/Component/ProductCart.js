import { Component } from 'react';
import './ProductCart.scss';

export default class ProductCart extends Component {
  render() {
    return (
      <div
        onClick={this.props.basketHandler}
        id={this.props.id}
        className="cartBox"
      >
        <div className="cartCircle">
          <i id={this.props.id} className="fas fa-shopping-cart"></i>
        </div>
      </div>
    );
  }
}
