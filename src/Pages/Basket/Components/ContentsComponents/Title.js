import { Component } from 'react';

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
