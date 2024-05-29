let friendAva = 'https://avatars.mds.yandex.net/i?id=13b1234f4c0f1e5730c6c65904b04179-4233102-images-thumbs&n=13';
let yourAva = 'https://avatars.mds.yandex.net/i?id=be935738007a47dbd50bbb658b223e462b45b692-10496841-images-thumbs&n=13';

let state = {
    profPage: {
        myPosts: [
            {mess: 'Привет, меня зовут АС'},
            {mess: 'Hi. А я крут'},
            {mess: 'О, как здорово'},
            {mess: 'Что ж. Вот мы и собралсь...'},
            {mess: 'Кто собрался, а кто и нет'},
            {mess: 'Вы о чём, ребята?'},
            {mess: 'Они куда-то собрались...'},
            {mess: 'И я знаю куда... В ReactJS круиз!!!'}
        ]
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

export default state;