import React from 'react';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import { Route } from 'react-router-dom';

const Main = () => {
  return (
    <main className='appMain'>
      <Route path='/profile' element={<Profile />} />
      <Route path='/chat'    element={<Dialogs />} />
    </main>
  );
}

export default Main;