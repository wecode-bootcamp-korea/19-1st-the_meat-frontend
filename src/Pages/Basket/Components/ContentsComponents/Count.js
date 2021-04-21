import { Component } from 'react';
import './Count.scss';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
    };
  }
  componentDidUpdate() {
    if (this.state.count < 0) {
      this.setState({
        count: 0,
      });
    }
  }
  sendCount = () => {
    console.log(this.state);
    this.props.updateCount(this.state.count);
  };
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
          <button onClick={this.minusCount} className="minusButton">
            -
          </button>
          <div className="countValue">{this.state.count}</div>
          <button onClick={this.plusCount} className="plusButton">
            +
          </button>
        </div>
        <button onClick={this.sendCount} className="countUpdate">
          수정하기
        </button>
      </li>
    );
  }
}

export default Count;
