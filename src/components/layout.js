import Head from 'next/head';
import style from '../styles/layout.module.css';
import { Footer, Header } from '../imports';

const Layout = props => {
  const { showFooter, showHeader, sliderStyle } = props;
  return (
    <>
      <Head>
        <title>🛒 CloudMallNG - {props.headerTitle}</title>
      </Head>
      <header className={style.header}>{showHeader ? <Header /> : null}</header>
      <section className={style.content}>{props.children}</section>
      <footer className={style.footer}>{showFooter ? <Footer /> : null}</footer>
    </>
  );
};

export default Layout;
