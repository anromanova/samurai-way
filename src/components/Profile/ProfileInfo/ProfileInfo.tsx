import React from 'react';
import s from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
  return (
    <>
      <div className={s.imageWrapper}>
        <img src="https://wallpaperaccess.com/full/1204591.jpg" alt=""/>
      </div>
      <div className={s.user}>
        <div className={s.user__image}>
          <img src="https://freesvg.org/img/abstract-user-flat-4.png" alt=""/>
        </div>
        <div className={s.user__info}>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;