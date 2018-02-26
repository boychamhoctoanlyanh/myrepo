import React from 'react';

const Message = ({chat, userId}) => (
    <li className={`chat ${userId === chat.user_id ? "right" : "left"}`}>
        {chat.text}
    </li>
);

export default Message;