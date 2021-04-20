import React from 'react';
import ProductsList from './ProductsList';
import Slider from '../../Slider/Slider';
import './Recommand.scss';

class Recommand extends React.Component {
  constructor() {
    super();
    this.sliderRef = React.createRef();
    this.state = {
      slide: 0,
    };
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
    return (
      <div className="recommandProducts">
        <h1 className="recommandTitle">추천제품</h1>
        <ul ref={this.sliderRef} className="recommandProductList">
          {data.map((elements, id) => (
            <ProductsList
              key={id}
              img={elements.img}
              name={elements.name}
              price={elements.price}
            />
          ))}
        </ul>
        <Slider changeSlider={this.changeSlider} />
      </div>
    );
  }
}

export default Recommand;

const data = [
  {
    img:
      'https://www.happy-ali.com/wp-content/uploads/2020/08/quokka1-1024x1024.jpg',
    name: '쿼카짱',
    price: 10000,
  },
  {
    img:
      'https://www.happy-ali.com/wp-content/uploads/2020/08/quokka1-1024x1024.jpg',
    name: '쿼카짱',
    price: 90000,
  },
  {
    img:
      'https://www.happy-ali.com/wp-content/uploads/2020/08/quokka1-1024x1024.jpg',
    name: '쿼카짱',
    price: 70000,
  },
  {
    img:
      'https://www.happy-ali.com/wp-content/uploads/2020/08/quokka1-1024x1024.jpg',
    name: '쿼카짱',
    price: 60000,
  },
  {
    img:
      'https://www.happy-ali.com/wp-content/uploads/2020/08/quokka1-1024x1024.jpg',
    name: '쿼카짱',
    price: 20000,
  },
  {
    img:
      'https://www.happy-ali.com/wp-content/uploads/2020/08/quokka1-1024x1024.jpg',
    name: '쿼카짱',
    price: 30000,
  },
  {
    img:
      'https://www.happy-ali.com/wp-content/uploads/2020/08/quokka1-1024x1024.jpg',
    name: '쿼카짱',
    price: 40000,
  },
  {
    img:
      'https://www.happy-ali.com/wp-content/uploads/2020/08/quokka1-1024x1024.jpg',
    name: '쿼카짱',
    price: 50000,
  },
];
