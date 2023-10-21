import React from 'react';
import s from "./Profile.module.scss";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
  return (
    <div className={s.mainContent}>
      <ProfileInfo/>
      <MyPosts/>
    </div>
  );
};