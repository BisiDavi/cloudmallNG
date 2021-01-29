import Head from 'next/head';
import style from '../styles/layout.module.css';
import { Footer, Header } from '../imports';

const Layout = props => {
  const { showFooter, showHeader, sliderStyle } = props;
  return (
    <>
      <Head>
        <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
        <script
          src="https://kit.fontawesome.com/83f2ab5e93.js"
          crossOrigin="anonymous"
        ></script>
        <title>🛒 CloudMallNG - {props.headerTitle}</title>
      </Head>
      <header className={style.header}>{showHeader ? <Header /> : null}</header>
      <section className={style.content}>{props.children}</section>
      <footer className={style.footer}>{showFooter ? <Footer /> : null}</footer>
    </>
  );
};

export default Layout;
