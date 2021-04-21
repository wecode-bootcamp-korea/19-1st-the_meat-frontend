import { Component } from 'react';
import './Title.scss';

class Title extends Component {
  render() {
    return (
      <li className="contentsTitle">
        <h1 className="title">{this.props.title}</h1>
      </li>
    );
  }
}

export default Title;
