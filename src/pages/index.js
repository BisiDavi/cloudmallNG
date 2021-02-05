import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { logo, pattern, Layout, PageSpinner } from '../imports';
import UserLocation from '../utils/UserLocation';
import style from '../styles/Home.module.css';

export default function Home() {
  const [spinner, setSpinner] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setSpinner(true);
    UserLocation.getUserCurrentLocation(router);
    UserLocation.watchUserLocationChanges();
  }, []);

  return (
    <Layout headerTitle="Welcome">
      <div className={style.container}>
        <div className="splashtop"></div>
        {spinner ? <PageSpinner /> : null}
        <div className={style.logo}>
          <img src={logo} alt="cloudmall logo" />
        </div>
        <div className="splashfooter"></div>
        <style jsx>
          {`
            .splashtop {
              background: url(${pattern}) no-repeat;
              height: 200px !important;
              position: absolute;
              background-size: cover;
              width: 100% !important;
              top: -40px;
            }
            .splashfooter {
              background: url(${pattern}) no-repeat;
              position: absolute;
              background-size: cover;
              bottom: 0px;
              width: 100% !important;
              height: 200px;
            }
            .modal-content {
              padding: 5px 10px !important;
            }
          `}
        </style>
      </div>
    </Layout>
  );
}
