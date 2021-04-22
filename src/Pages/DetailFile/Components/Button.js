import { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    const { id, text, classN } = this.props;
    return (
      <button id={id} className={classN}>
        {text}
      </button>
    );
  }
}

export default Button;
