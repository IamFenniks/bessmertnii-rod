import React from 'react';
import css from './Dialogs.module.css';
import Chat from './Chat/Chat';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
  return (
    <div className={css.dialogs}>
      <Chat />

      <Messages />
    </div>
  );
}

export default Dialogs;