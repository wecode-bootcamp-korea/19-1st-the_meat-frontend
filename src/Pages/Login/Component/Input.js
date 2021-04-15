import { Component } from 'react';
import './Input.scss';

class Input extends Component {
  render() {
    const { type, text, classN } = this.props;
    return <input type={type} placeholder={text} className={classN} />;
  }
}

export default Input;
