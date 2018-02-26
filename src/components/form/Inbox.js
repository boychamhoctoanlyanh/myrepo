import React from 'react';


const Inbox = (props) => {

  return (
    <div className="chatroom">
      <ul className="chats" ref="chats">
        {
          chats.map((chat) =>
            <Message chat={chat} userId={props.params.id} />
          )
        }
      </ul>
      <form className="input" onSubmit={(e) => this.submitMessage(e)}>
        <input type="text" ref="msg" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Inbox;