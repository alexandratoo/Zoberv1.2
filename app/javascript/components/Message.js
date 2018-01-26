import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    let now = new Date( this.props.timestamp );
    let timeFormat = now.toISOString().substr(11, 8);
    return (
      <div className='msg'>
        <span className="msg-content">{ this.props.text }</span>
        <span className="message-owner">{ this.props.owner }</span>
        <span className="msg-time">{ timeFormat }</span>
      </div>
    );
  }
}
