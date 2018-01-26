import React, { Component } from "react";
import Message from './Message';

class Messenger extends React.Component {
  render () {
    return (
      <div>
        {
          this.props.messages.map((m) => {
            <Message key={ message.id }
                     timestamp={ message.timestamp }
                     owner={ message.owner }
                     text={ message.text }
                     />
          })
        }
      </div>
    );
  }
}

export default Messenger
