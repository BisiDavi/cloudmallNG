import React from "react";
import { Modal } from "react-bootstrap";
import Link from "next/link";
import style from "../styles/Home.module.css";

const OrderModal = ({ product, modalState, closeModal }) => {
  return (
    <div className="orderModal">
      <Modal
        show={modalState}
        className={style.locationmodal}
        onHide={closeModal}
        backdropClassName={style.backdrop}
      >
        <Modal.Header closeButton>
          <Modal.Title className={style.modaltitle}>
            😉 Hello - Welcome
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={style.modalbody}>
          <div className="product-image">
            <img src={product.image} alt="product image" />
          </div>
          <div className="product-detail">
            <ul>
              <li className="d-flex justify-content-around my-2">
                <h4>{product.name} (A pack of 5)</h4>
                <span className="favourite">
                  <i className="fa fa-heart"></i>
                </span>
                <p>N{product.price}</p>
              </li>
              <li className="d-flex my-2">
                <span className="mr-3">
                  <i className="fa fa-map-marked-alt"></i>
                </span>
                <p>{product.vendor}</p>
              </li>
              <li className="d-flex my-2">
                <span className="mr-3">
                  <i className="fa fa-star"></i>
                </span>
                <p>{product.rating}</p>
              </li>
              <li className="d-flex justify-content-between my-2">
                <p>Delivery Period</p>
                <p>{product.duration}</p>
              </li>
              <li className="my-2">
                <p>{product.description}</p>
              </li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer className={style.modalButton}>
          <Link href="/order">
            <a className="font-weight-bold btn btn-light">Order</a>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderModal;
