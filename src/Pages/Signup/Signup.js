import React, { Component } from 'react';
import './Signup.scss';
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      idMessage: true,
      idMessageValue: '아이디를 입력해 주세요.',
      pwMessage: true,
      pwMessageValue: '응애 나 아기 비밀번호',
      phoneMessageValue: '휴대전화 번호는 숫자만 가능하다.',
      id: '',
      pw: '',
      name: '',
      phone: '',
    };
  }
  changeIdMessageValue = e => {
    let idLengthTest = /\w{0,6}/g;
    let idTest = /\w{6,}/g;
    if (idLengthTest.test(e.target.value)) {
      this.setState({
        idMessageValue: '아이디는 6자이상 20자 미만으로 입력해주세요.',
        idMessage: true,
      });
    }
    if (e.target.value == '') {
      this.setState({
        idMessageValue: '아이디를 입력해 주세요',
        idMessage: true,
      });
    }
    if (idTest.test(e.target.value)) {
      this.setState({
        idMessage: false,
        id: e.target.value,
      });
    }
  };
  inputPw = e => {
    let pwLength = /\w{10,}/g;
    let pwTest = /^(?=.*[a-zA-Z])(?=.*[0-9]).{11,}$/g;
    if (!pwLength.test(e.target.value)) {
      this.setState({
        pwMessageValue: '비밀번호는 10자 이상 영어, 숫자 다 섞어야함',
        pwMessage: true,
      });
    }
    if (pwTest.test(e.target.value)) {
      this.setState({
        pw: e.target.value,
        pwMessage: false,
        pwMessageValue: '',
      });
    }
  };

  verifyPw = e => {
    if (this.state.pw === e.target.value) {
      this.setState({
        pwMessage: false,
        pwMessageValue: '',
      });
    } else {
      this.setState({
        pwMessage: true,
        pwMessageValue: '비밀번호를 확인해주세요',
      });
    }
  };

  phoneNumber = e => {
    let phoneTest = /^(\d{10,})/;
    if (phoneTest.test(e.target.value)) {
      this.setState({
        phoneMessageValue: '',
        phone: e.target.value,
      });
    }
    if (!phoneTest.test(e.target.value)) {
      this.setState({
        phoneMessageValue: '휴대전화 번호는 숫자만 가능하다.',
        phone: '',
      });
    }
  };
  render() {
    return (
      <div className="Signup">
        <form className="SignupForm">
          <h1 className="SignupTitle">
            <em>더미트&</em> 신규 회원가입
          </h1>
          <input
            onChange={this.changeIdMessageValue}
            className="SignupId"
            placeholder="아이디"
          ></input>
          <p
            style={{ display: this.state.idMessage == true ? 'block' : 'none' }}
            className="SignupIdMessage"
          >
            {this.state.idMessageValue}
          </p>
          <input
            type="password"
            onChange={this.inputPw}
            className="SignupPw"
            placeholder="비밀번호"
          ></input>
          <input
            type="password"
            onChange={this.verifyPw}
            className="SignupPwVerify"
            placeholder="비밀번호 확인"
          ></input>
          <p
            style={{ display: this.state.pwMessage == true ? 'block' : 'none' }}
            className="SignupPwMessage"
          >
            {this.state.pwMessageValue}
          </p>
          <input className="SignupName" placeholder="이름"></input>
          <input
            onChange={this.phoneNumber}
            className="SignupPhone"
            placeholder="휴대전화 번호"
          ></input>
          <p className="SignupPhMessage">{this.state.phoneMessageValue}</p>
          <button className="SignupBtn">가입하기</button>
        </form>
      </div>
    );
  }
}

export default Signup;
