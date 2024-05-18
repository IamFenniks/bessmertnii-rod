import React from 'react';
import css from './Profile.module.css'
import MyPosts from './myPosts/MyPosts';

const Profile = () => {
  return (
    <div className={ css.profile }>
      <div>
        Avatar + desription
      </div>

      <MyPosts />
    </div>
  );
}

export default Profile;