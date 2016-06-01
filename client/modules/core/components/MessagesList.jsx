import React from 'react';
import Message from './Message.jsx';

class MessagesList extends React.Component {
  constructor(props) {
    super(props);
    //console.log("[construct MessagesList]");
  }

  render() {

    //console.log(this.props);
    return (
      <div className='postlist'>
        <ul>
          {this.props.messages.map((message) => (
            <Message key={message._id} message={message} />
          ))}
        </ul>
      </div>
    );

  }


}


export default MessagesList;
