import { renderEntireTree } from "../render";

let friendAva = 'https://avatars.mds.yandex.net/i?id:13b1234f4c0f1e5730c6c65904b04179-4233102-images-thumbs&n=13';
let yourAva = 'https://avatars.mds.yandex.net/i?id:be935738007a47dbd50bbb658b223e462b45b692-10496841-images-thumbs&n=13';

let state = {
    profPage: {
        myPosts: [
            {id:0, mess: 'Привет, меня зовут АС',               likesCount: 11}, 
            {id:1, mess: 'Hi. А я крут',                        likesCount: 1}, 
            {id:2, mess: 'О, как здорово',                      likesCount: 12}, 
            {id:3, mess: 'Что ж. Вот мы и собралсь...',         likesCount: 11}, 
            {id:4, mess: 'Кто собрался, а кто и нет',           likesCount: 11}, 
            {id:5, mess: 'Вы о чём, ребята?',                   likesCount: 11}, 
            {id:6, mess: 'Они куда-то собрались...',            likesCount: 11}, 
            {id:7, mess: 'И я знаю куда... В ReactJS круиз!!!', likesCount: 11} 
        ],
        newPostText: ''
    },
    dialogsPage: {
        chItems: [
            {id: 1, name: 'RT'},
            {id: 2, name: 'Мир вокруг'},
            {id: 3, name: 'Любимая'},
            {id: 4, name: 'Доня'},
            {id: 5, name: 'Шопот фронта'}
        ],
        mesItems: [
            {avatar: friendAva, message: 'Привет!'},
            {avatar: yourAva,   message: 'Привет, коль не шутишь!'},
            {avatar: friendAva, message: 'Какие могут быть шутки?'},
            {avatar: yourAva,   message: 'Ты серьёзно?'},
            {avatar: friendAva, message: 'Да пошёл ты!'}
        ]  
    }
}

export let addPost = () => {
    let newPost = {
        id: 8,
        mess: state.profPage.newPostText,
        likesCount: 0
    }
    state.profPage.myPosts.push(newPost);
    state.profPage.newPostText = ''; 
    
    renderEntireTree(state);
}

export let updateNewPostText = ( text )  => {
    state.profPage.newPostText = text;

    renderEntireTree(state);
}

export default state;