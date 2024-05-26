import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let friendAva = 'https://avatars.mds.yandex.net/i?id=13b1234f4c0f1e5730c6c65904b04179-4233102-images-thumbs&n=13';
let yourAva = 'https://avatars.mds.yandex.net/i?id=be935738007a47dbd50bbb658b223e462b45b692-10496841-images-thumbs&n=13';

let myPosts = [
  {mess: 'Привет, меня зовут АС'},
  {mess: 'Hi. А я крут'},
  {mess: 'О, как здорово'},
  {mess: 'Что ж. Вот мы и собралсь...'},
  {mess: 'Кто собрался, а кто и нет'},
  {mess: 'Вы о чём, ребята?'},
  {mess: 'Они куда-то собрались...'},
  {mess: 'И я знаю куда... В ReactJS круиз!!!'}
];

let chItems = [
  {id: 1, name: 'RT'},
  {id: 2, name: 'Мир вокруг'},
  {id: 3, name: 'Любимая'},
  {id: 4, name: 'Доня'},
  {id: 5, name: 'Шопот фронта'}
];

let mesItems = [
  {avatar: friendAva, message: 'Привет!'},
  {avatar: yourAva,   message: 'Привет, коль не шутишь!'},
  {avatar: friendAva, message: 'Какие могут быть шутки?'},
  {avatar: yourAva,   message: 'Ты серьёзно?'},
  {avatar: friendAva, message: 'Да пошёл ты!'}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App myPosts={ myPosts } 
      chItems={ chItems } 
      mesItems={ mesItems }
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
