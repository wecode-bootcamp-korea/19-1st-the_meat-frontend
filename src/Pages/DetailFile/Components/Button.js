import { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    const { buttonHandler, id, text, classN } = this.props;
    return (
      <button onClick={buttonHandler} id={id} className={classN}>
        {text}
      </button>
    );
  }
}

export default Button;
