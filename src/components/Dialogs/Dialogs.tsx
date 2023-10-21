import React from 'react';
import s from './Dialogs.module.scss';
const Dialogs = () => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>
          <div className={`${s.dialog} ${s.active}`}>Nancy</div>
          <div className={s.dialog}>Max</div>
          <div className={s.dialog}>Zoe</div>
          <div className={s.dialog}>Leo</div>
        </div>
        <div className={s.messages}>
          <div className={s.message}>Hi</div>
          <div className={s.message}>How are you</div>
          <div className={s.message}>Nice to see you</div>
          <div className={s.message}>Hi</div>
          <div className={s.message}>Hello</div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;