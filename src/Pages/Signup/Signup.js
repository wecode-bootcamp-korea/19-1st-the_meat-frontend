import React, { Component } from 'react';
import './Signup.scss';

class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        <form className="SignupForm">
          <h1 className="SignupTitle">
            <em>더미트&</em> 신규 회원가입
          </h1>
          <input className="SignupId" placeholder="아이디"></input>
          <input className="SignupPw" placeholder="비밀번호"></input>
          <input className="SignupPwVerify" placeholder="비밀번호 확인"></input>
          <input className="SignupName" placeholder="이름"></input>
          <input className="SignupEmail" placeholder="휴대전화 번호"></input>
          <button className="SignupBtn">가입하기</button>
        </form>
      </div>
    );
  }
}

export default Signup;
