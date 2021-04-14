import { Component } from 'react';
import Form from './Form';

class Layout extends Component {
  render() {
    return (
      <form className="SignUpForm">
        <h1 className="SignUpTitle">
          <em>더미트&</em> 신규 회원가입
        </h1>
        <Form data={inputData} />
        <button className="SignUpBtn">가입하기</button>
      </form>
    );
  }
}

export default Layout;

const inputData = [
  {
    type: 'text',
    text: '아이디',
    class: 'SignUpId',
  },
  {
    type: 'password',
    text: '비밀번호',
    class: 'SignUpPw',
  },
  {
    type: 'password',
    text: '비밀번호 확인',
    class: 'SignUpPwVerify',
  },
  {
    type: 'text',
    text: '이름',
    class: 'SignUpName',
  },
  {
    type: 'text',
    text: '번호',
    class: 'SignUpPhone',
  },
];
