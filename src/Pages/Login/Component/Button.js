import { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    const { classN, text, id, click } = this.props;
    return (
      <button onClick={click} id={id} className={classN}>
        {text}
      </button>
    );
  }
}

export default Button;
