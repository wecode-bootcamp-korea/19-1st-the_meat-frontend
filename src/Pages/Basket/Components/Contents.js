import { Component } from 'react';
import Image from './ContentsComponents/Image';
import Title from './ContentsComponents/Title';
import Price from './ContentsComponents/Price';
import Count from './ContentsComponents/Count';
import Amount from './ContentsComponents/Amount';
import Delete from './ContentsComponents/Delete';
import './Contents.scss';

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
      id: this.props.id,
    };
  }
  updateCount = count => {
    this.setState({
      count: count,
    });
    fetch('http://10.58.6.101:8000/orders/cart', {
      method: 'PATCH',
      body: JSON.stringify({
        user_id: 1, //개수 수정시 백과 통신
        id: this.state.id,
        quantity: a,
      }),
    })
      .then(res => res.json())
      .then(data => this.props.updateCountSum(data.sum));
  };

  render() {
    const { deleteHandler, count, image, title, id, price } = this.props;
    return (
      <ul id={id} className="basketContents">
        <Image image={image} alt={title} />
        <Title title={title} />
        <Price price={price} />
        <Count count={count} updateCount={this.updateCount} />
        <Amount price={price} count={this.state.count} />
        <Delete id={id} deleteHandler={deleteHandler} />
      </ul>
    );
  }
}

export default Contents;
