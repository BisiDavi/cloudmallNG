import Head from "next/head";

const Layout = props => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <title>🛒 CloudMallNG - {props.headerTitle}</title>
      </Head>
      {props.children}
    </>
  );
};

export default Layout;
