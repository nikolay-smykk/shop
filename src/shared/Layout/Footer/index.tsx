import React from 'react';
import style from './style.module.css';

export const Footer = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.block}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className={style.block}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
        </div>
        <div className={style.copyright}>© Copyright 2021. All Rights Reserved.</div>
      </div>
    </>
  );
};
