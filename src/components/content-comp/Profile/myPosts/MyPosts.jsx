import React from 'react';
import css from './MyPosts.module.css'
import Post from './Post/Post';

// onClick={ () => { alert('Добавить') } }

const MyPosts = (props) => {
  let myPosts = props.myPosts;
  let postsArr = myPosts.map( p => <Post message={p.mess} /> );

  let newPostElement = React.createRef();
  
  let onAddPost = () => { 
    // debugger
    let text = newPostElement.current.value;
    props.addPost(text);
  }
  return (
    <div className={css.myPosts}>
      <hr />
      <h4>My post</h4>

      <div className={css.myForm}>
        <div className="postText">
          <textarea name="postText" ref={ newPostElement } title='Введите текст...'></textarea>
        </div>
        <div className="addPostBtn">
          <button onClick={ onAddPost }>Add Post</button>
        </div>
      </div>
      <hr />

      <div className={css.posts}>
        { postsArr }
      </div>

    </div>
  );
}

export default MyPosts;