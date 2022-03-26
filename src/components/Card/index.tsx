import React, { FunctionComponent } from 'react';
import style from './style.module.css';

interface PropsInterface {
  title: string;
  price: number;
}

export const Card: FunctionComponent<PropsInterface> = ({ title, price }) => {
  console.log(title, price);
  return <div className={style.wrapper}>{title}</div>;
};
