import React from 'react';
import css from './Messages.module.css';

let friendAva = 'https://avatars.mds.yandex.net/i?id=13b1234f4c0f1e5730c6c65904b04179-4233102-images-thumbs&n=13';
let yourAva = 'https://avatars.mds.yandex.net/i?id=be935738007a47dbd50bbb658b223e462b45b692-10496841-images-thumbs&n=13';

const MessItem = (props) => {
  return (
    <div className={css.item}>
      <img src={ props.ava }
        alt=""
        className={css.avaImg}
      />
      <div className={css.messText}>{ props.message }</div>
    </div>
  )
}

const Messages = () => {
  return (
    <div className={css.messages}>
      <h4>Сообщения</h4>

      <div className={css.items}>
        <MessItem ava={ friendAva } message='Привет!' />
        <MessItem ava={ yourAva } message='Привет, коль не шутишь!' />
        <MessItem ava={ friendAva } message='Какие могут быть шутки?' />
        <MessItem ava={ yourAva } message='Ты серьёзно?' />
        <MessItem ava={ friendAva } message='Да пошёл ты!' />
      </div>
    </div>
  );
}

export default Messages;