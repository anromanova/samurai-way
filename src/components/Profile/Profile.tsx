import React from 'react';
import s from "./Profile.module.scss";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
  return (
    <div className={s.mainContent}>
      <h1>Main Content</h1>
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
      <MyPosts/>
    </div>
  );
};