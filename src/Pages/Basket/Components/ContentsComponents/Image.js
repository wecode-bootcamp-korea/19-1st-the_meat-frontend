import { Component } from 'react';
import './Image.scss';

class Image extends Component {
  render() {
    return (
      <li className="contentsImage">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff8%2F54%2F49%2Ff85449b90cb8cfb593fb4d8af5d80393.jpg&f=1&nofb=1"
          alt="asd"
        />
      </li>
    );
  }
}

export default Image;
