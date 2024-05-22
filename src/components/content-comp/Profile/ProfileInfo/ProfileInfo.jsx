import React from 'react';
import css from './ProfileInfo.module.css';
import profAva from '../../../../img/для-портфолио.jpg'

const ProfileInfo = () => {
  return (
    <div className={css.profInfo}>
      <div className={css.profAva}>
        <img src={profAva} alt="" />
      </div>
      <div className="descr">
        Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Безопасную, заглавных! До предупредила родного предложения маленькая. Предупреждал, моей. До снова последний взобравшись. От всех взобравшись послушавшись, всеми скатился ipsum свою.
      </div>
    </div>
  );
}

export default ProfileInfo;