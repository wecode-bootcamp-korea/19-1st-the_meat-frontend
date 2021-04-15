import { Component } from 'react';
import './Ptag.scss';

class Ptag extends Component {
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

export default Ptag;
