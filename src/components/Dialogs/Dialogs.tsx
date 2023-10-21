import React from 'react';
import s from './Dialogs.module.scss';
import {NavLink} from "react-router-dom";

type DialogItemProps = {
  name: string
  id: string
}
const DialogItem = (props: DialogItemProps) => {
  let path = `/dialogs/${props.id}`;
  return (
    <div className={`${s.dialog} ${s.active}`}><NavLink to={path}>{props.name}</NavLink></div>
  )
}

type MessageProps = {
  message: string
}

const Message = (props: MessageProps) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}
const Dialogs = () => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>
          <DialogItem name='Nancy' id={"1"}/>
          <DialogItem name='Max' id={"2"}/>
          <DialogItem name='Zoe' id={"3"}/>
          <DialogItem name='Leo' id={"4"}/>
        </div>
        <div className={s.messages}>
          <Message message='Hi'/>
          <Message message='How are you'/>
          <Message message='Nice to see you'/>
          <Message message='Hello'/>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;