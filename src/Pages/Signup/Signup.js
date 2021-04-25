import { Component } from 'react';
import './Signup.scss';
import Layout from './Components/Layout';

class SignUp extends Component {
  render() {
    return (
      <div className="SignUp">
        <Layout history={this.props.history} />
      </div>
    );
  }
}

export default SignUp;
