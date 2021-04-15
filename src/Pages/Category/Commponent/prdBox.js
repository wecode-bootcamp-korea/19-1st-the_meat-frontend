import { Component } from 'react';
import './prdBox.scss';

export default class prdBox extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="prdimg">
        {data.map((input, idx) => (
          <div className="greenBox"></div>
        ))}
      </div>
    );
  }
}

return (
    <div className="prdimg">
      {data.map((input, idx) => (
        
        <Input
          key={idx}
          type={input.type}
          text={input.text}
          // value={this.state[input.type]}
          // handleInput={this.handleInput}
          // handleValid={validator[input.type]}
        />
      ))}
    </div>
    <Button value={text} />
    {type === "signUp" && (
      <p className="isAlreadyLogin">
        이미 가입하셨나요? <span>로그인</span>
      </p>
    )}
);
}
}