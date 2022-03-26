import React from 'react';

import style from './style.module.css';

export const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.logo_name}>MINIMALIZM STUDIO</div>
      <div className={style.wrapper}>
        <div className={style.block}>
          <span>MINIMALIZM</span>
          <span>Главная</span>
          <span>О Нас</span>
        </div>
        <div className={style.block_cart}>
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
};
