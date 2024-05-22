import React from 'react';
import css from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={css.dialogs}>
      <div className={ css.allChats }>
        <h4>Все чаты</h4>

        <div className="ul">
          <div className="li">
            <a href=""><img 
              src="https://avatars.mds.yandex.net/i?id=13b1234f4c0f1e5730c6c65904b04179-4233102-images-thumbs&n=13" 
              alt="" 
              className={ css.avaImg } />
            </a>
            <a href="">RT</a>
          </div>

          <div className="li">
            <a href=""><img 
              src="https://avatars.mds.yandex.net/i?id=13b1234f4c0f1e5730c6c65904b04179-4233102-images-thumbs&n=13" 
              alt="" 
              className={ css.avaImg } />
            </a>
            <a href="">Мир вокруг</a>
          </div>

          <div className="li">
            <a href=""><img 
              src="https://avatars.mds.yandex.net/i?id=13b1234f4c0f1e5730c6c65904b04179-4233102-images-thumbs&n=13" 
              alt="" 
              className={ css.avaImg } />
            </a>
            <a href="">Любимая</a>
          </div>

          <div className="li">
            <a href=""><img 
              src="https://avatars.mds.yandex.net/i?id=13b1234f4c0f1e5730c6c65904b04179-4233102-images-thumbs&n=13" 
              alt="" 
              className={ css.avaImg } />
            </a>
            <a href="">Доня</a>
          </div>

          <div className="li">
            <a href=""><img 
              src="https://avatars.mds.yandex.net/i?id=13b1234f4c0f1e5730c6c65904b04179-4233102-images-thumbs&n=13" 
              alt="" 
              className={ css.avaImg } />
            </a>
            <a href="">Шопот фронта</a>
          </div>
        </div>
      </div>

      <div className={ css.messages }>
        <h4>Сообщения</h4>

        <div className={ css.items }>
          <div className={ css.item }>
            <img src="https://avatars.mds.yandex.net/i?id=13b1234f4c0f1e5730c6c65904b04179-4233102-images-thumbs&n=13" 
              alt="" 
              className={ css.avaImg } 
            />
            <div className={ css.messText }>Привет</div>
          </div>

          <div className={ css.item }>
            <img src="https://avatars.mds.yandex.net/i?id=be935738007a47dbd50bbb658b223e462b45b692-10496841-images-thumbs&n=13" 
              alt="" 
              className={ css.avaImg } 
            />
            <div className={ css.messText }>Привет</div>
          </div>

          <div className={ css.item }>
            <img src="https://avatars.mds.yandex.net/i?id=13b1234f4c0f1e5730c6c65904b04179-4233102-images-thumbs&n=13" 
              alt="" 
              className={ css.avaImg } 
            />
            <div className={ css.messText }>Привет</div>
          </div>

          <div className={ css.item }>
            <img src="https://avatars.mds.yandex.net/i?id=be935738007a47dbd50bbb658b223e462b45b692-10496841-images-thumbs&n=13" 
              alt="" 
              className={ css.avaImg } 
            />
            <div className={ css.messText }>Привет</div>
          </div>

          <div className={ css.item }>
            <img src="https://avatars.mds.yandex.net/i?id=13b1234f4c0f1e5730c6c65904b04179-4233102-images-thumbs&n=13" 
              alt="" 
              className={ css.avaImg } 
            />
            <div className={ css.messText }>Привет</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dialogs;