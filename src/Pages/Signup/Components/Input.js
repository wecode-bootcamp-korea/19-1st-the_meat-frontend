import { Component } from 'react';

class Input extends Component {
  render() {
    const { type, text, classN } = this.props;
    return (
      <input name={text} type={type} className={classN} placeholder={text} />
    );
  }
}

export default Input;
