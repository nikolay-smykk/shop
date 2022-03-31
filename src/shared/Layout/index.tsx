import React, { FunctionComponent, ReactChild, ReactFragment, ReactPortal } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import style from './style.module.css';

interface PropsInterface {
  children: ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
}

export const Layout: FunctionComponent<PropsInterface> = ({ children }) => {
  return (
    <>
      <div className={style.wrapper}>{children}</div>
      <Footer />
    </>
  );
};
