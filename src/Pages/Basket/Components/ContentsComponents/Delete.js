import { Component } from 'react';
import './Delete.scss';

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
    };
  }
  sendDeleteId = e => {
    this.props.deleteHandler(e.target.id);
  };
  render() {
    return (
      <div id={this.props.id} onClick={this.sendDeleteId} className="delete">
        ␡
      </div>
    );
  }
}
export default Delete;
