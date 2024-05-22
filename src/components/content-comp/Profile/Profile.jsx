import React from 'react';
import css from './Profile.module.css'
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={ css.profile }>
      <ProfileInfo />

      <MyPosts />
    </div>
  );
}

export default Profile;