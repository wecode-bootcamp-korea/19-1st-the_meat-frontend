import React from 'react';
import './Slider.scss';

class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      slide: 0,
    };
  }
  componentDidUpdate() {
    if (this.state.slide < -100) {
      this.setState({ slide: 0 });
    }
    if (this.state.slide > 1) {
      this.setState({ slide: -100 });
    }
  }

  leftHandler = () => {
    this.setState({
      slide: this.state.slide - 100,
    });
    this.props.changeSlider(this.state.slide);
  };

  rightHandler = () => {
    this.setState({
      slide: this.state.slide + 100,
    });
    this.props.changeSlider(this.state.slide);
  };

  render() {
    return (
      <div className="slider">
        <button onClick={this.leftHandler}>👈</button>
        <button onClick={this.rightHandler}>👉</button>
      </div>
    );
  }
}

export default Slider;
