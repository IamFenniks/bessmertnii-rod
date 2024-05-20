import React from 'react';
import css from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={css.dialogs}>
      <div>
        <h4>Dialogs</h4>

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

      <div>
        <h4>Messages</h4>


      </div>
    </div>
  );
}

export default Dialogs;