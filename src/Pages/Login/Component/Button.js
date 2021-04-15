import { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    const { classN, text } = this.props;
    return <button className={classN}>{text}</button>;
  }
}

export default Button;
