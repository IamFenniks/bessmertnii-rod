import React from 'react';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';

const Main = (props) => {
  let myPosts = props.myPosts;

  return (
    <main className='appMain'>
      <Routes>
        <Route path="/profile" element={<Profile myPosts={ myPosts } />} />
        <Route 
          path="/chat"
          element={<Dialogs  chItems={ props.chItems } mesItems={ props.mesItems } />} 
        />
      </Routes>
    </main>
  );
}

export default Main;