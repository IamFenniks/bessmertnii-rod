import React from 'react';
import css from './MyPosts.module.css'
import Post from './Post/Post';

let myPostData = [
  {mess: 'Привет, меня зовут АС'},
  {mess: 'Hi. А я крут'},
  {mess: 'О, как здорово'},
  {mess: 'Что ж. Вот мы и собралсь...'},
  {mess: 'Кто собрался, а кто и нет'},
  {mess: 'Вы о чём, ребята?'},
  {mess: 'Они куда-то собрались...'},
  {mess: 'И я знаю куда... В ReactJS круиз!!!'}
];

const MyPosts = () => {
  return (
    <div className={css.myPosts}>
      <hr />
      <h4>My post</h4>

      <div className={css.myForm}>
        <div className="postText">
          <textarea name="postText" id="postText">Введите текст...</textarea>
        </div>
        <div className="addPostBtn">
          <button>Add Post</button>
        </div>
      </div>
      <hr />

      <div className={css.posts}>
        <Post message={myPostData[0].mess} />
        <Post message={myPostData[1].mess} />
        <Post message={myPostData[2].mess} />
        <Post message={myPostData[3].mess} />
        <Post message={myPostData[4].mess} />
        <Post message={myPostData[5].mess} />
        <Post message={myPostData[6].mess} />
        <Post message={myPostData[7].mess} />
      </div>

    </div>
  );
}

export default MyPosts;