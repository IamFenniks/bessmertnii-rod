import React from 'react';
import css from './Profile.module.css'
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  debugger
  return (
    <div className={ css.profile }>
      <ProfileInfo />

      <MyPosts myPosts={ props.myPosts } />
    </div>
  );
}

export default Profile;