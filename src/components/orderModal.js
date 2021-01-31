import React from 'react';
import { Modal } from 'react-bootstrap';
import Link from 'next/link';
import style from '../styles/Home.module.css';

const OrderModal = ({ product, modalState, closeModal }) => {
  return (
    <div className="orderModal">
      <Modal
        show={modalState}
        className={style.locationmodal}
        onHide={closeModal}
        backdropClassName={style.backdrop}
      >
        <Modal.Header className={style.modalHeader} closeButton></Modal.Header>
        <Modal.Body className={style.modalbody}>
          <div className="product-image">
            <img
              className={style.productImg}
              src={product.image}
              alt="product image"
            />
          </div>
          <div className={style.productDetail}>
            <ul>
              <li className={style.productname}>
                <p>{product.name}</p>
                <i className="far fa-heart"></i>
                <p>{product.price}</p>
              </li>
              <li className={style.productIcon}>
                <i className="fa fa-map-marker"></i>
                <p>{product.vendor}</p>
              </li>
              <li className={style.productRating}>
                <i className="fa fa-star"></i>
                <p>{product.rating}</p>
              </li>
              <li className={style.productDuration}>
                <p>Time to Prepare</p>
                <p>{product.duration}</p>
              </li>
              <li className={style.productDescription}>
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
