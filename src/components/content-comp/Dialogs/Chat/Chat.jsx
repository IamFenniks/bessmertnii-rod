import React from 'react';
import css from './Chat.module.css';
import ChatItem from './ChatItem/ChatItem';

let chItemData = [
  {id: 1, name: 'RT'},
  {id: 2, name: 'Мир вокруг'},
  {id: 3, name: 'Любимая'},
  {id: 4, name: 'Доня'},
  {id: 5, name: 'Шопот фронта'}
];

const Chat = (props) => {
  return (
    <div className={css.allChats}>
      <h4>Все чаты</h4>

      <div className={css.ul}>
        <ChatItem name={chItemData[0].name} userId={chItemData[0].id} />
        <ChatItem name={chItemData[1].name} userId={chItemData[1].id} />
        <ChatItem name={chItemData[2].name} userId={chItemData[2].id} />
        <ChatItem name={chItemData[3].name} userId={chItemData[3].id} />
        <ChatItem name={chItemData[4].name} userId={chItemData[4].id} />
      </div>
    </div>
  );
}

export default Chat;