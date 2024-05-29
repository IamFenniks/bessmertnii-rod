import React from 'react';
import css from './Dialogs.module.css';
import Chat from './Chat/Chat';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
  debugger
  let dialogsPage = props.dialogsPage;

  return (
    <div className={css.dialogs}>
      <Chat chItems={ dialogsPage.chItems } />

      <Messages mesItems={ dialogsPage.mesItems } />
    </div>
  );
}

export default Dialogs;