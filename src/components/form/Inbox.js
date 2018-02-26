import React from 'react';
import data from '../../data';
import Message from './Message';

class Inbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      itemId: props.params.itemId
    };
  }
  getChat(itemId) {


    let list = data.formPage.chatText;
    let listNew = [];
    for (let index = 0; index < list.length; index++) {
      if (list[index].user_id) {
        if (parseInt(list[index].user_id) === parseInt(itemId)) {
          listNew.push(list[index]);
        }
      }
    }
    console.log(listNew)
    this.setState({
      chats: listNew,
    });
  }
  componentDidMount() {
    this.getChat(this.state.itemId);
  }
  componentWillReceiveProps(nextProps) {
    debugger;

    if (nextProps.params.itemId !== this.state.itemId) {
      this.setState({
        itemId: nextProps.params.itemId
      });
      this.getChat(nextProps.params.itemId);
    }
  }


  render() {
    return (
      <div className="chatroom">
        <ul className="chats" ref="chats">
          {
            this.state.chats.map((chat, i) =>
              <Message key={i} chat={chat} userId={this.props.params.itemId} />
            )
          }
        </ul>
        <form className="input" onSubmit={(e) => this.submitMessage(e)}>
          <input type="text" ref="msg" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Inbox;