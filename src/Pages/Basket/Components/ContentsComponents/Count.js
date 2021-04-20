import { Component } from 'react';
import './Count.scss';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log('Asd');
  }
  componentDidUpdate() {
    if (this.state.count < 0) {
      this.setState({
        count: 0,
      });
    }
  }
  minusCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  plusCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <li className="contentsCount">
        <div className="countButton">
          <button onClick={this.minusCount} className="minusButton"></button>
          <div className="countValue">{this.state.count}</div>
          <button onClick={this.plusCount} className="plusButton"></button>
        </div>
        <button className="countUpdate"></button>
      </li>
    );
  }
}

export default Count;
