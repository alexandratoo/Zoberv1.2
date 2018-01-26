import React, { Component } from "react";
import Message from './Message';

export default class Messenger extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      unread: 0
    };
  }

  componentDidMount(){
    // make GET for messages and nest setState below
    const populateInbox = [        {
                id: 1,
                title: 'New User Setup Instructions',
                timestamp: 1478859071000,
                owner: 'Jen',
                text: 'Getting started ....',
                tags: ''
            },
            {
                id: 2,
                title: 'Welcome to Zober San-Fran',
                timestamp: 1478859115000,
                owner: 'Mark',
                text: 'With the introduction....',
                tags: ''
            },
            {
                id: 3,
                title: 'Congrats on one month Zobriety!',
                timestamp: 1478859131000,
                owner: 'Jen',
                text: 'emoticon, ....',
                tags: ''
            },
            {
                id: 4,
                title: 'Looking for confidential Feedback',
                timestamp: 1478859165000,
                owner: 'house-admin',
                text: 'Poll: ...',
                tags: ''
            }
          ];

    this.setState({
      messages: populateInbox,
      unread: populateInbox.length
    })
  }

  onDeleteMessage(index){
    //make DELETE req for id and then async await

    let temp = this.state.messages;
    temp.splice(index, 1);
    this.setState({
      messages: temp,
      unread: this.state.unread - 1
    })
    console.log(this.state.messages);
  }

  render () {
    return (
      <div>
        <h3>You have { this.state.unread } unread messages:</h3>
        <ul>
          {
            this.state.messages.map((m, i) =>
            <Message
              onDelete={ this.onDeleteMessage.bind(this) }
              position={ i }
              key={ m.id }
              title={ m.title }
              timestamp={ m.timestamp }
              owner={ m.owner }
              text={ m.text }
            />
          )}
        </ul>
      </div>
    );
  }
}
