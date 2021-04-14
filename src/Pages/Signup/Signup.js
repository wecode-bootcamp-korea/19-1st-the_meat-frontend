import { Component } from 'react';
import './SignUp.scss';
import Layout from './Components/Layout';

class SignUp extends Component {
  // changeIdMessageValue = e => {
  //   let idLengthTest = /\w{0,6}/g;
  //   let idTest = /\w{6,}/g;
  //   if (idLengthTest.test(e.target.value)) {
  //     this.setState({
  //       idMessageValue: '아이디는 6자이상 20자 미만으로 입력해주세요.',
  //       idMessage: true,
  //     });
  //   }
  //   if (e.target.value === '') {
  //     this.setState({
  //       idMessageValue: '아이디를 입력해 주세요',
  //       idMessage: true,
  //     });
  //   }
  //   if (idTest.test(e.target.value)) {
  //     this.setState({
  //       idMessage: false,
  //       id: e.target.value,
  //     });
  //   }
  // };
  // inputPw = e => {
  //   let pwLength = /\w{10,}/g;
  //   let pwTest = /^(?=.*[a-zA-Z])(?=.*[0-9]).{11,}$/g;
  //   if (!pwLength.test(e.target.value)) {
  //     this.setState({
  //       pwMessageValue: '비밀번호는 10자 이상 영어, 숫자 다 섞어야함',
  //       pwMessage: true,
  //     });
  //   }
  //   if (pwTest.test(e.target.value)) {
  //     this.setState({
  //       pw: e.target.value,
  //       pwMessage: false,
  //       pwMessageValue: '',
  //     });
  //   }
  // };

  // verifyPw = e => {
  //   if (this.state.pw === e.target.value) {
  //     this.setState({
  //       pwMessage: false,
  //       pwMessageValue: '',
  //     });
  //   } else {
  //     this.setState({
  //       pwMessage: true,
  //       pwMessageValue: '비밀번호를 확인해주세요',
  //     });
  //   }
  // };

  // phoneNumber = e => {
  //   let phoneTest = /^(\d{10,})/;
  //   if (phoneTest.test(e.target.value)) {
  //     this.setState({
  //       phoneMessageValue: '',
  //       phone: e.target.value,
  //     });
  //   }
  //   if (!phoneTest.test(e.target.value)) {
  //     this.setState({
  //       phoneMessageValue: '휴대전화 번호는 숫자만 가능하다.',
  //       phone: '',
  //     });
  //   }
  // };
  render() {
    return (
      <div className="SignUp">
        <Layout />
      </div>
    );
  }
}

export default SignUp;
