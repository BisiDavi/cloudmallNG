import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import OverflowWrapper from 'react-overflow-wrapper';
import { OrderModal, starIcon, OrderProduct, ButtonLink } from '../imports';
import style from '../styles/category.module.css';

const Category = ({ deals }) => {
  const [modal, setModal] = useState(false);
  const [orders, showOrders] = useState(false);

  const viewOrder = () => showOrders(true);
  const closeOrder = () => showOrders(false);
  const handleOpen = (e, deals) => {
    const productId = e.target.id;
    console.log('selected id', productId);

    const deal = deals[productId];
    setModal(true);
    console.log('selected deal', deal);
  };
  const handleClose = () => setModal(false);

  return (
    <section className={style.category}>
      <OverflowWrapper className={style.overflowWrapper}>
        {deals.map(
          deal =>
            (
              <div key={deal.id} className={style.product}>
                <span onClick={handleOpen(deal)}>
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
                  <OrderModal
                    product={deal}
                    modalState={modal}
                    closeModal={handleClose}
                  />
                </span>
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

                  <ButtonLink linkTo="orders" text="Order" />
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
