import React from 'react';
import s from "./MyPosts.module.scss";
import {Post} from "./Post/Post";
export const MyPosts = () => {
    return (
            <div className={s.posts}>
                <Post message={'Hi, how are you?'}/>
                <Post message={'My first post'}/>
            </div>
    );
};