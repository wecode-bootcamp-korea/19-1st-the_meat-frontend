import { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <li className="contentsImage">
        <img src={this.props.image} alt={this.props.alt} />
      </li>
    );
  }
}

export default Image;
