import React from 'react';
import css from './ChatItem.module.css';
import { Link } from 'react-router-dom';

const ChatItem = (props) => {
  let path = props.userId;

  return (
    <div className={css.li}>
      <Link to={ path }>
        <img className={css.avaImg}
          src="https://avatars.mds.yandex.net/i?id=13b1234f4c0f1e5730c6c65904b04179-4233102-images-thumbs&n=13"
          alt=""
        />
      </Link>
      <Link to={ path }>{ props.name }</Link>
    </div>
  )
}

export default ChatItem;