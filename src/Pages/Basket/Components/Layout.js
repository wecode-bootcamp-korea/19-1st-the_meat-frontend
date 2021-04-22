import { Component } from 'react';
import Title from './Title';
import Menu from './Menu';
import Form from './Form';
import './Layout.scss';

class Layout extends Component {
  render() {
    return (
      <div className="basketLayout">
        <Title />
        <Menu />
        <Form />
      </div>
    );
  }
}

export default Layout;
