import React from 'react';
import { Card } from '../../components/Card';
import { Layout } from '../../shared/Layout';

import style from './style.module.css';

export const Home = () => {
  const el = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
    <Card key={item} title={`${String(item)} Title`} price={item * 10000} />
  ));
  return (
    <Layout>
      <div className={style.wrapper}>{el}</div>
    </Layout>
  );
};
