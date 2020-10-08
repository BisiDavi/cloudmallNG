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
        <title>🛒 CloudMallNG - {props.headerTitle}</title>
      </Head>
      {showHeader ? <Header /> : null}
      <section className={style.content}>{props.children}</section>
      {showFooter ? <Footer /> : null}
    </>
  );
};

export default Layout;
