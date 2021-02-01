import Head from 'next/head';
import style from '../styles/layout.module.css';
import { Footer, Pageheader } from '../imports';

const ProductLayout = ({ showFooter, showHeader, headerTitle, children }) => {
  return (
    <>
      <Head>
        <title>🛒 CloudMallNG - {headerTitle}</title>
      </Head>
      <header className={style.header}>
        {showHeader ? <Pageheader title={headerTitle} /> : null}
      </header>
      <section className={style.content}>{children}</section>
      <footer className={style.footer}>{showFooter ? <Footer /> : null}</footer>
    </>
  );
};

export default ProductLayout;
