import React, { Component } from 'react';
import './NoproductMessage.scss';
export default class NoproductMessage extends Component {
  render() {
    return (
      <div className="MessageBody">
        <div className="noProductMessage">
          <div className="message">
            <i class="far fa-question-circle"></i>
            <p>
              상품이 준비 중입니다.
              <br />
              이용에 불편을 드려 죄송합니다.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
