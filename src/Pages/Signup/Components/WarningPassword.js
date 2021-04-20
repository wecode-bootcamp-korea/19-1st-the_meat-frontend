import { Component } from 'react';
import './WarningPassword.scss';

class WarningPassword extends Component {
  render() {
    const { password, passwordVerify, classN } = this.props;
    return (
      <>
        {password !== passwordVerify && (
          <div>
            <p className={classN}>비밀번호를 확인해주세요.</p>
          </div>
        )}
      </>
    );
  }
}

export default WarningPassword;
