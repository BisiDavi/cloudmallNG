import Head from "next/head";
import style from "../styles/layout.module.css";
import { Footer, Header } from "../imports";

const Layout = props => {
  const { showFooter, showHeader, sliderStyle } = props;
  return (
    <>
       <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
        <script
          src="https://kit.fontawesome.com/83f2ab5e93.js"
          crossorigin="anonymous"
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
