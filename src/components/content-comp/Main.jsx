import React from 'react';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';

const Main = () => {
  return (
    <main className='appMain'>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat"    element={<Dialogs />} />
      </Routes>
    </main>
  );
}

export default Main;