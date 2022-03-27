import React, { FunctionComponent } from 'react';
import style from './style.module.css';

interface PropsInterface {
  title: string;
  price: number;
}

export const Card: FunctionComponent<PropsInterface> = ({ title, price }) => {
  console.log(title, price);
  return (
    <div className={style.wrapper}>
      <img
        className={style.img}
        src="https://rogovshop.ru/image/cache/catalog/05.10/211014-rogov-24575-684x900.jpg"
      />
      <div className={style.block}>
        <span className={style.title}>{title}</span>
        <span className={style.price}>{price}</span>
      </div>
    </div>
  );
};
