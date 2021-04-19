import { Component } from 'react';
import Input from './Input';
import Ptag from './WarningPassword';
import './Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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
    fetch('http://192.168.0.250:8000/users/users', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        confirm_password: this.state.passwordVerify,
        name: this.state.name,
        phone_number: this.state.phone,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  render() {
    const { data } = this.props;
    console.log(this.state);
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
