import Router from "next/router";
import LocationContext from "../context/LocationContext";
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
  return (
    <LocationContext.Provider value={LocationContext}>
      <Component {...pageProps} />
    </LocationContext.Provider>
  );
}

export default MyApp;
