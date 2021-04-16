import { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    const { id, text, classN, buttonHandler } = this.props;
    return (
      <button onClick={buttonHandler} id={id} className={classN}>
        {text}
      </button>
    );
  }
}

export default Button;
