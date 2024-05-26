import React from 'react';
import css from './Chat.module.css';
import ChatItem from './ChatItem/ChatItem';

let chItems = [
  {id: 1, name: 'RT'},
  {id: 2, name: 'Мир вокруг'},
  {id: 3, name: 'Любимая'},
  {id: 4, name: 'Доня'},
  {id: 5, name: 'Шопот фронта'}
];

let chItemsArr = chItems.map( chIt => <ChatItem name={chIt.name} userId={chIt.id} /> );

const Chat = (props) => {
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