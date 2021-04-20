import { Component } from 'react';
import './Input.scss';

class Input extends Component {
  render() {
    const { type, state, text, classN, handleInput } = this.props;
    return (
      <input
        type={type}
        name={state}
        placeholder={text}
        className={classN}
        onChange={handleInput}
      />
    );
  }
}

export default Input;
