import React from 'react';
import s from "./Post.module.scss";

type PostTypeProps = {
  message: string
}
export const Post = (props: PostTypeProps) => {
  return (
    <div className={s.post}>
        <img className={s.img} src="https://freesvg.org/img/abstract-user-flat-4.png" alt=""/>
      {props.message}
    </div>
  );
};