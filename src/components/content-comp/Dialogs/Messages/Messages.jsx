import React from 'react';
import css from './Messages.module.css';
import MessItem from './MessItem/MessItem';

let friendAva = 'https://avatars.mds.yandex.net/i?id=13b1234f4c0f1e5730c6c65904b04179-4233102-images-thumbs&n=13';
let yourAva = 'https://avatars.mds.yandex.net/i?id=be935738007a47dbd50bbb658b223e462b45b692-10496841-images-thumbs&n=13';

let mesItems = [
  {avatar: friendAva, message: 'Привет!'},
  {avatar: yourAva,   message: 'Привет, коль не шутишь!'},
  {avatar: friendAva, message: 'Какие могут быть шутки?'},
  {avatar: yourAva,   message: 'Ты серьёзно?'},
  {avatar: friendAva, message: 'Да пошёл ты!'}
];

let messArr = mesItems.map( m => <MessItem ava={m.avatar} message={m.message} /> );

const Messages = () => {
  return (
    <div className={css.messages}>
      <h4>Сообщения</h4>

      <div className={css.items}>
        { messArr }
      </div>
    </div>
  );
}

export default Messages;