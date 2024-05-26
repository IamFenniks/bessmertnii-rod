import React from 'react';
import css from './Messages.module.css';
import MessItem from './MessItem/MessItem';

const Messages = (props) => {
  let messArr = props.mesItems.map( m => <MessItem ava={m.avatar} message={m.message} /> );

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