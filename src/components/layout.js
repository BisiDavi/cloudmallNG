import Head from 'next/head';
import style from '../styles/layout.module.css';
import { Footer, Header } from '../imports';

const Layout = ({ showFooter, showHeader, headerTitle, children }) => {
  return (
    <>
      <Head>
        <title>🛒 CloudMallNG - {headerTitle}</title>
      </Head>
      <header className={style.header}>{showHeader ? <Header /> : null}</header>
      <section className={style.content}>{children}</section>
      <footer className={style.footer}>{showFooter ? <Footer /> : null}</footer>
    </>
  );
};

export default Layout;
