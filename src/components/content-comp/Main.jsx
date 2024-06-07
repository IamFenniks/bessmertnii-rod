import React from 'react';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';

const Main = (props) => {
  let state = props.state;
  
  return (
    <main className='appMain'>
      <Routes>
        <Route 
          path="/profile" 
          element={<Profile profPage={ state.profPage } 
          addPost={ props.addPost } />} 
        />
        <Route 
          path="/chat" 
          element={<Dialogs dialogsPage={ state.dialogsPage } />} 
        />
      </Routes>
    </main>
  );
}

export default Main;