import React, { Component } from 'react';
import Layout from './Components/Layout';
// import Recommand from './Components/Recommand';
import './DetailFile.scss';

class DetailFile extends Component {
  render() {
    return (
      <div className="DetailFile">
        <Layout />
        {/* <Recommand /> */}
      </div>
    );
  }
}

export default DetailFile;
