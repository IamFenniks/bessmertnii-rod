import React from 'react';
import css from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={css.myPosts}>
      <h4>My post</h4>

      <div className={css.myForm}>
        <textarea name="addPost" id="addPost">addPost</textarea>
        <button>Add Post</button>
      </div>


      <div className={css.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>

    </div>
  );
}

export default MyPosts;