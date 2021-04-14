import { Component } from 'react';
import Input from './Input';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      name: '',
      phone: '',
    };
  }
  render() {
    const { data } = this.props;
    return (
      <>
        {data.map((elements, id) => (
          <Input
            key={id}
            type={elements.type}
            text={elements.text}
            classN={elements.class}
          />
        ))}
      </>
    );
  }
}

export default Form;
