import { Component } from 'react';
import './Form.scss';
import Input from './Input';
import Button from './Button';

class Form extends Component {
  render() {
    const { inputData, buttonData } = this.props;
    return (
      <div className="loginForm">
        <h1 className="loginTitle">로그인</h1>
        <div className="LoginInput">
          {inputData.map((elements, id) => (
            <Input
              key={id}
              type={elements.types}
              text={elements.text}
              classN={elements.classN}
            />
          ))}
        </div>
        <div className="LoginButton">
          {buttonData.map((elements, id) => (
            <Button key={id} text={elements.text} classN={elements.classN} />
          ))}
        </div>
      </div>
    );
  }
}

export default Form;
