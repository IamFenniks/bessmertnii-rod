import React from 'react';
import css from './MessItem.module.css';

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

export default MessItem;