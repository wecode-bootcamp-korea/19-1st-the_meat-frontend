import { Component } from 'react';
import Order from './Order';
import Contents from './Contents';

class Form extends Component {
  render() {
    return (
      <div className="basketForm">
        <Contents />
        <Contents />
        <Order />
      </div>
    );
  }
}

export default Form;
