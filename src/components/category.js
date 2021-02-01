import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import OverflowWrapper from 'react-overflow-wrapper';
import {
  ShowProductModal,
  ShowOrdersModal,
  closeProductModal,
  closeOrderModal
} from '../store/action/userActions';
import {
  OrderModal,
  starIcon,
  OrderProduct,
  OrangeButton,
  PageSpinner
} from '../imports';
import style from '../styles/category.module.css';

const Category = ({ deals }) => {
  const dispatch = useDispatch();
  const { productModal, product, showLoadingProducts } = useSelector(
    state => state.onClickedProduct
  );
  const { ordersModal, showLoadingOrders } = useSelector(
    state => state.makeOrders
  );

  const viewOrderModal = () => dispatch(ShowOrdersModal());
  const closeModalOrder = () => dispatch(closeOrderModal());

  const ProductModal = () => {
    if (showLoadingProducts) {
      return <PageSpinner />;
    } else if (productModal) {
      return (
        <OrderModal
          product={product}
          modalState={productModal}
          closeModal={handleClose}
        />
      );
    } else {
      return null;
    }
  };

  const displayProductModal = () => {
    let productsEntries = Object.entries(product);
    const productsLength = productsEntries.length;
    const orderNotEmpty = productsLength > 0;
    const displayCondition = productModal && orderNotEmpty;
    return displayCondition ? null : ProductModal();
  };

  const handleOpen = deals => {
    dispatch(ShowProductModal(deals));
  };
  const handleClose = () => dispatch(closeProductModal());

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
                {/* {displayProductModal()} */}
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
                    onClick={viewOrderModal}
                    text="Order"
                  />
                </div>
              </div>
            ) || <Skeleton duration={2} />
        )}
      </OverflowWrapper>
      {showLoadingProducts ? (
        <PageSpinner />
      ) : productModal ? (
        <OrderModal
          product={product}
          modalState={productModal}
          closeModal={handleClose}
        />
      ) : null}
      {showLoadingOrders ? (
        <PageSpinner />
      ) : ordersModal ? (
        <OrderProduct
          modalState={ordersModal}
          closeOrderMenu={closeModalOrder}
        />
      ) : null}
    </section>
  );
};

export default Category;
