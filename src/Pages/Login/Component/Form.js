import { Component } from 'react';
import './Form.scss';
import Input from './Input';
import Button from './Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
    };
  }

  buttonClick = e => {
    if (e.target.id == 1) {
      this.props.history.push('/signup');
    }
  };

  inputHandling = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { inputData, buttonData } = this.props;
    return (
      <div className="loginForm">
        <h1 className="loginTitle">로그인</h1>
        <div className="LoginInput">
          {inputData.map((elements, id) => (
            <Input
              key={id}
              type={elements.type}
              text={elements.text}
              classN={elements.classN}
              name={elements.state}
              inputHandling={this.inputHandling}
            />
          ))}
        </div>
        <div className="LoginButton">
          {buttonData.map((elements, id) => (
            <Button
              key={id}
              id={id}
              text={elements.text}
              classN={elements.classN}
              click={this.buttonClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Form;
