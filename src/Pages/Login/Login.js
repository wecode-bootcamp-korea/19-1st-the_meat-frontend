import React, { Component } from 'react';
import Form from './Component/Form';
import './Login.scss';
import Nav from '../Nav/Nav';
import NavCategory from '../Nav/NavCategory';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <Nav />
        <NavCategory />
        <Form
          inputData={LoginForm}
          buttonData={LoginInput}
          history={this.props.history}
        />
      </div>
    );
  }
}

export default Login;

const LoginForm = [
  {
    type: 'text',
    text: '아이디',
    state: 'id',
    classN: 'idInput',
  },
  {
    type: 'password',
    text: '비밀번호',
    state: 'pw',
    classN: 'pwInput',
  },
];

const LoginInput = [
  {
    text: '로그인',
    classN: 'loginBTN',
  },
  {
    text: '회원가입',
    classN: 'signupBTN',
  },
];
