import React from 'react';
import { Layout } from '../../shared/Layout';

import style from './style.module.css';

export const Auth = () => {
  const [error, setError] = React.useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(!error);
  };
  return (
    <Layout>
      <div className={style.wrapper}>
        <div className={style.form}>
          <form onSubmit={submit}>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
            {error && <span className={style.error}>Wrong Email or Password</span>}
          </form>
        </div>
      </div>
    </Layout>
  );
};
