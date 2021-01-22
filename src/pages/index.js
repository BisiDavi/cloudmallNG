import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Modal } from 'react-bootstrap';
import { logo, pattern, Layout, Spinner, ButtonLink } from '../imports';
import UserLocation from '../utils/UserLocation';
import style from '../styles/Home.module.css';

export default function Home() {
  const [modal, setModal] = useState(false);
  const router = useRouter();
  useEffect(() => {
    UserLocation.checkBrowserGeoCompatibility();
    UserLocation.getUserCurrentLocation(router);
    UserLocation.watchUserLocationChanges();
    // handleOpen();
  }, []);

  // const handleOpen = () => {
  //   setTimeout(() => {
  //     setModal(true);
  //   }, 1000);
  // };
  const handleClose = () => setModal(false);

  return (
    <Layout headerTitle="Welcome">
      <div className={style.container}>
        <div className="splashtop"></div>
        {modal ? null : <Spinner />}
        <div className="locationModal">
          <Modal
            show={modal}
            className={style.locationmodal}
            backdrop="static"
            keyboard={false}
            onHide={handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title className={style.modaltitle}>
                😉 Hello - Welcome
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className={style.modalbody}>
              <p>Please, help us with your location to serve you better</p>
            </Modal.Body>
            <Modal.Footer className={style.modalFooter}>
              <Link href="/home">
                <a>
                  <ButtonLink text="Cancel" />
                </a>
              </Link>
              <Link href="/location">
                <a>
                  <ButtonLink text="Allow" />
                </a>
              </Link>
            </Modal.Footer>
          </Modal>
        </div>
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
