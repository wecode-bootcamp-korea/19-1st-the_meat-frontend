import React, { Component } from 'react';
import '../Banner/Banner.scss';
class Banner extends Component {
  constructor() {
    super();
    this.state = { bannerImg: [], changeImage: 0 };
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
    setInterval(this.leftClick, 4000);
  }

  leftClick = () => {
    let { changeImage } = this.state;
    if (changeImage === 0) {
      changeImage = 4;
    }
    this.setState({
      changeImage: changeImage - 1,
    });
  };

  rightClick = () => {
    let { changeImage } = this.state;
    if (changeImage === 3) {
      changeImage = -1;
    }
    this.setState({
      changeImage: changeImage + 1,
    });
  };

  render() {
    console.log('초기상태:', this.state.bannerImg);
    console.log('currentImage:', this.state.changeImage);
    const { bannerImg, changeImage } = this.state;
    {
      bannerImg[0] && console.log(bannerImg[changeImage].image_url);
    }
    return (
      <article className="banner">
        <button className="leftButton" onClick={this.leftClick}>
          <i className="fas fa-angle-left"></i>
        </button>
        <button className="rightButton" onClick={this.rightClick}>
          <i className="fas fa-angle-right"></i>
        </button>
        {bannerImg[0] && (
          <img
            className="bannerImg"
            src={bannerImg[changeImage].image_url}
            alt="메인 이미지"
          />
        )}
      </article>
    );
  }
}

export default Banner;
