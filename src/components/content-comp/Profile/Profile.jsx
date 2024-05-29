import React from 'react';
import css from './Profile.module.css'
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  let profPage = props.profPage;
  
  return (
    <div className={ css.profile }>
      <ProfileInfo />

      <MyPosts myPosts={ profPage.myPosts } />
    </div>
  );
}

export default Profile;