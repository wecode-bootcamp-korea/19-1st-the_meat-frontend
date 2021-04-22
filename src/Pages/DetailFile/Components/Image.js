import { Component } from 'react';
import './Image.scss';
class Image extends Component {
  render() {
    return <img class src={this.props.image} alt="" />;
  }
}

export default Image;
