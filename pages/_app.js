import { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/css/all.css";
import "nprogress/nprogress.css";
import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <CssBaseline />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
