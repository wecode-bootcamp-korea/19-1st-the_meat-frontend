import { Component } from 'react';
import './Input.scss';

class Input extends Component {
  render() {
    const { type, text, classN, inputHandling, name } = this.props;
    return (
      <input
        onChange={inputHandling}
        type={type}
        placeholder={text}
        className={classN}
        name={name}
      />
    );
  }
}

export default Input;
