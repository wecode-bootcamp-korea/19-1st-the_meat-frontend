import React, { Component } from 'react';
import '../Banner/Banner.scss';
class Banner extends Component {
  constructor() {
    super();
    this.state = { bannerImg: [], currentImage: 0 };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/Banner.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bannerImg: data,
        });
      });
  }
  leftClick = () => {
    let { currentImage } = this.state;
    if (currentImage === 0) {
      currentImage = 4;
    }
    this.setState({
      currentImage: currentImage - 1,
    });
  };

  rightClick = () => {
    let { currentImage } = this.state;
    if (currentImage === 3) {
      currentImage = -1;
    }
    this.setState({
      currentImage: currentImage + 1,
    });
  };

  render() {
    return (
      <article className="banner">
        <button className="leftButton" onClick={this.leftClick}>
          <i className="fas fa-angle-left"></i>
        </button>
        <button className="rightButton" onClick={this.rightClick}>
          <i className="fas fa-angle-right"></i>
        </button>
        {this.state.bannerImg[0] && (
          <img
            className="bannerImg"
            src={this.state.bannerImg[this.state.currentImage].image_url}
            alt="메인 이미지"
          />
        )}
      </article>
    );
  }
}

export default Banner;
