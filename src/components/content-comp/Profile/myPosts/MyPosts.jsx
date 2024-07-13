import React from 'react';
import css from './MyPosts.module.css'
import Post from './Post/Post';

// onClick={ () => { alert('Добавить') } }

const MyPosts = (props) => {
  debugger
  let newPostText = props.newPostText;
  let postsArr = props.myPosts.map( (p, index) => <Post key={index} message={p.mess} /> );
  
  let onAddPost = () => { 
    props.addPost();
  }
  
  let element = '';

  let onNPTChange = (e) => {
    element = e.target.value;
    props.updateNewPostText(element); 
  }
  return (
    <div className={css.myPosts}>
      <hr />
      <h4>My post</h4>

      <div className={css.myForm}>
        <div className="postText">
          <textarea   
            onChange={ onNPTChange } 
            placeholder="postText"
            value={ newPostText } />
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