import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import OverflowWrapper from 'react-overflow-wrapper';
import { OrderModal, starIcon, OrderProduct, OrangeButton } from '../imports';
import style from '../styles/category.module.css';

const Category = ({ deals }) => {
  const [modal, setModal] = useState(false);
  const [orders, showOrders] = useState(false);
  const [tobeOrdered, setTobeOrdered] = useState({});

  const viewOrder = () => showOrders(true);
  const closeOrder = () => showOrders(false);

  const preferredProduct = product => {
    console.log('product', product);
    setTobeOrdered({ ...product });
    console.log('tobeOrdered', tobeOrdered);
  };

  console.log('tobeOrdered', tobeOrdered);
  const ProductModal = () => {
    return (
      <OrderModal
        product={tobeOrdered}
        modalState={modal}
        closeModal={handleClose}
      />
    );
  };
  let productsEntries = Object.entries(tobeOrdered);
  const productsLength = productsEntries.length;

  const orderNotEmpty = productsLength !== 0;

  const displayProductModal = () => {
    const displayCondition = modal && orderNotEmpty;
    return displayCondition ? ProductModal() : null;
  };

  const handleOpen = deals => {
    setModal(true);
    preferredProduct(deals);
  };

  const handleClose = () => setModal(false);

  return (
    <section className={style.category}>
      <OverflowWrapper className={style.overflowWrapper}>
        {deals.map(
          deal =>
            (
              <div key={deal.id} className={style.product}>
                <span onClick={() => handleOpen(deal)}>
                  {(
                    <img
                      className={style.productImage}
                      src={deal.image}
                      alt={deal.name}
                    />
                  ) || <Skeleton duration={2} />}
                  <span className={style.duration}>
                    <h6>{deal.duration} </h6>
                    <p>min</p>
                  </span>
                </span>
                {displayProductModal()}
                <div className={style.details}>
                  <div className={style.row1}>
                    <h5>{deal.name}</h5>
                    <h3 className={style.price}>{deal.price}</h3>
                  </div>
                  <div className={style.productDetails}>
                    <div className={style.vendor}>
                      <p>{deal.vendor}</p>
                      <div className="d-flex">
                        <img src={starIcon} alt="rating" />
                        <p>{deal.rating.substr(0, 3)}</p>
                      </div>
                    </div>
                    <p className={style.open}>{deal.status}</p>
                  </div>
                  <OrangeButton
                    className="justify-content-center"
                    onClick={viewOrder}
                    text="Order"
                  />
                </div>
              </div>
            ) || <Skeleton duration={2} />
        )}
      </OverflowWrapper>

      {orders ? <OrderProduct closeOrderMenu={closeOrder} /> : null}
    </section>
  );
};

export default Category;
