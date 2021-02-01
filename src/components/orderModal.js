import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ShowOrdersModal, closeOrderModal } from '../store/action/userActions';
import { OrderProduct, OrangeButton, PageSpinner } from '../imports';
import style from '../styles/Home.module.css';

const OrderModal = ({ product, modalState, closeModal }) => {
  const dispatch = useDispatch();
  const { ordersModal, loadingOrdersModal } = useSelector(
    state => state.makeOrders
  );

  const viewOrderModal = () => dispatch(ShowOrdersModal());
  const closeModalOrder = () => dispatch(closeOrderModal());
  const displayProduct = () => {
    {
      loadingOrdersModal ? (
        <PageSpinner />
      ) : ordersModal ? (
        <OrderProduct
          modalState={ordersModal}
          closeOrderMenu={closeModalOrder}
        />
      ) : null;
    }
  };
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
          <OrangeButton
            className="justify-content-center"
            onClick={viewOrderModal}
            text="Order"
          />
        </Modal.Footer>
      </Modal>
      {/* {displayProduct()} */}
    </div>
  );
};

export default OrderModal;
