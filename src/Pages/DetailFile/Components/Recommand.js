import React from 'react';
import ProductsList from './ProductsList';
import Slider from '../../Slider/Slider';
import './Recommand.scss';
import { API } from '../../../config';
class Recommand extends React.Component {
  constructor() {
    super();
    this.sliderRef = React.createRef();
    this.state = {
      slide: 0,
      data: [],
    };
  }

  componentDidMount() {
    fetch(`${API}/products?discount=1`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          data: data.result,
        })
      );
  }

  componentDidUpdate() {
    this.sliderRef.current.style.transform = `translateX(${this.state.slide}%)`;
  }

  changeSlider = data => {
    this.setState({
      slide: data,
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="recommandProducts">
        <h1 className="recommandTitle">추천제품</h1>
        <ul ref={this.sliderRef} className="recommandProductList">
          {this.state.data !== undefined &&
            data.map((elements, id) => (
              <ProductsList
                key={id}
                img={elements.image_url}
                name={elements.name}
                price={elements.real_price}
              />
            ))}
        </ul>
        <Slider changeSlider={this.changeSlider} />
      </div>
    );
  }
}

export default Recommand;
