import { Component } from 'react';
import './Image.scss';
class Image extends Component {
  render() {
    return <img class src={this.props.image} alt="쿼카" />;
  }
}

export default Image;
