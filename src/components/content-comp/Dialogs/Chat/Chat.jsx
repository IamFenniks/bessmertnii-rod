import React from 'react';
import css from './Chat.module.css';
import ChatItem from './ChatItem/ChatItem';

const Chat = (props) => {
  
  let chItemsArr = props.chItems.map( chIt => <ChatItem name={chIt.name} userId={chIt.id} /> );

  return (
    <div className={css.allChats}>
      <h4>Все чаты</h4>

      <div className={css.ul}>
        { chItemsArr }
      </div>
    </div>
  );
}

export default Chat;