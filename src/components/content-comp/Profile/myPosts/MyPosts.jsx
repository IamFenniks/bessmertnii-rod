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
        <Post message='Привет, меня зовут АС' />
        <Post message='Hi. А я крут' />
        <Post message='О, как здорово' />
        <Post message='Что ж. Вот мы и собралсь...' />
        <Post message='Кто собрался, а кто и нет' />
        <Post message='Вы о чём, ребята?' />
        <Post message='Они куда-то собрались...' />
        <Post message='И я знаю куда... В ReactJS круиз!!!' />
      </div>

    </div>
  );
}

export default MyPosts;