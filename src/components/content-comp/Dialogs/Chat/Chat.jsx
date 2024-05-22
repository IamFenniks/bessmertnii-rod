import React from 'react';
import css from './Chat.module.css';
import ChatItem from './ChatItem/ChatItem';

const Chat = (props) => {
  return (
    <div className={css.allChats}>
      <h4>Все чаты</h4>

      <div className={css.ul}>
        <ChatItem name='RT' userId='1' />
        <ChatItem name='Мир вокруг' userId='2' />
        <ChatItem name='Любимая' userId='3' />
        <ChatItem name='Доня' userId='4' />
        <ChatItem name='Шопот фронта' userId='5' />
      </div>
    </div>
  );
}

export default Chat;