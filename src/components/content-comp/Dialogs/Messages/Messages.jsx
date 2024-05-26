import React from 'react';
import css from './Messages.module.css';
import MessItem from './MessItem/MessItem';

let friendAva = 'https://avatars.mds.yandex.net/i?id=13b1234f4c0f1e5730c6c65904b04179-4233102-images-thumbs&n=13';
let yourAva = 'https://avatars.mds.yandex.net/i?id=be935738007a47dbd50bbb658b223e462b45b692-10496841-images-thumbs&n=13';

let mesItemData = [
  {avatar: friendAva, message: 'Привет!'},
  {avatar: yourAva,   message: 'Привет, коль не шутишь!'},
  {avatar: friendAva, message: 'Какие могут быть шутки?'},
  {avatar: yourAva,   message: 'Ты серьёзно?'},
  {avatar: friendAva, message: 'Да пошёл ты!'}
];

const Messages = () => {
  return (
    <div className={css.messages}>
      <h4>Сообщения</h4>

      <div className={css.items}>
        <MessItem ava={mesItemData[0].avatar} message={mesItemData[0].message} />
        <MessItem ava={mesItemData[1].avatar} message={mesItemData[1].message} />
        <MessItem ava={mesItemData[2].avatar} message={mesItemData[2].message} />
        <MessItem ava={mesItemData[3].avatar} message={mesItemData[3].message} />
        <MessItem ava={mesItemData[4].avatar} message={mesItemData[4].message} />
      </div>
    </div>
  );
}

export default Messages;