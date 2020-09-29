import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Modal } from "react-bootstrap";
import { logo, pattern } from "../imports";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    handleOpen();
  }, []);

  const handleOpen = () => {
    return setTimeout(() => {
      setModal(true);
    }, 3000);
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>🛒 CloudMallNG - Welcome</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
      </Head>
      <div className="splashtop"></div>
      {modal ? null : (
        <div className={styles.ldsSpinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}

      <div className="locationModal">
        <Modal
          show={modal}
          className={styles.locationmodal}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title className={styles.modaltitle}>
              Please, help us with your location to serve you better
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className={styles.modalbody}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
          </Modal.Body>
          <Modal.Footer className={styles.modalButton}>
            <Link href="/home">
              <a className="text-danger font-weight-bold">Cancel</a>
            </Link>
            <Link href="/location">
              <a className="text-success font-weight-bold">Allow</a>
            </Link>
          </Modal.Footer>
        </Modal>
      </div>
      <div className={styles.logo}>
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
  );
}
