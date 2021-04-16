import { Component } from 'react';
import Input from './Input';
import Ptag from './Ptag';
import './Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: '',
      passwordVerify: '',
      name: '',
      phone: '',
    };
  }
  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = () => {
    fetch('', {
      method: 'POST',
      body: JSON.stringify({
        id: this.state.id,
        password: this.state.password,
        passwordVerify: this.state.passwordVerify,
        name: this.state.name,
        phone: this.state.phone,
      }),
    })
      .then(res => res.json())
      .then(res => res.console.log('테스트'));
  };

  render() {
    const { data } = this.props;
    return (
      <>
        {data.map((elements, id) => (
          <Input
            key={id}
            type={elements.type}
            text={elements.text}
            classN={elements.class}
            state={elements.state}
            handleInput={this.handleInput}
          />
        ))}
        <Ptag
          password={this.state.password}
          passwordVerify={this.state.passwordVerify}
          classN="Ptag"
        />
        <button onClick={this.handleSubmit} className="SignUpBtn">
          가입하기
        </button>
      </>
    );
  }
}

export default Form;
