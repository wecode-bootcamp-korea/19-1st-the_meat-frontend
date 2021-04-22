import { Component } from 'react';
import './Title.scss';

class Title extends Component {
  render() {
    return <h1 className="productTitle">{this.props.name}</h1>;
  }
}

export default Title;
