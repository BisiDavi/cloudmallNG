import { CacheProvider } from '@emotion/core';
import { useEffect } from 'react';
import { cache } from 'emotion';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/css/all.css';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <CacheProvider value={cache}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/83f2ab5e93.js"
          crossOrigin="anonymous"
        ></script>
        <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
        <CssBaseline />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </CacheProvider>
  );
}
export default MyApp;
