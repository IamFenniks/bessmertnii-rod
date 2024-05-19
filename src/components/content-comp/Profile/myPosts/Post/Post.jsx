import React from 'react';
import css from './Post.module.css'

const Post = (props) => {
  return (
    <div className={ css.item }>
      <img src="https://avatars.mds.yandex.net/i?id=13b1234f4c0f1e5730c6c65904b04179-4233102-images-thumbs&n=13" 
        alt=""
        className={ css.avaImg } 
      />
      { props.message }
    </div>
  );
}

export default Post;