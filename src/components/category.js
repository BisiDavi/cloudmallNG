import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Container, Row, Col, Button } from 'react-bootstrap';
import OverflowWrapper from 'react-overflow-wrapper';
import { OrderModal, starIcon, OrderProduct, OrangeButton } from '../imports';
import style from '../styles/category.module.css';

const Category = ({ deals }) => {
  const [modal, setModal] = useState(false);
  const [orders, showOrders] = useState(false);
  const viewOrder = () => showOrders(true);
  const closeOrder = () => showOrders(false);

  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  return (
    <section className={style.category}>
      <OverflowWrapper className={style.overflowWrapper}>
        {deals.map(
          deal =>
            (
              <div key={deal.id} className={style.product}>
                <span onClick={handleOpen}>
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
                <Container className={style.details}>
                  <Row className={style.row}>
                    <Col xs={8}>
                      <h5>{deal.name}</h5>
                    </Col>
                    <Col xs={4}>
                      <h3 className={style.price}>{deal.price}</h3>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col className="ml-2">
                      <p>{deal.vendor}</p>
                    </Col>
                    <Col className="d-flex">
                      <img src={starIcon} alt="rating" />
                      <p>{deal.rating.substr(0, 3)}</p>
                    </Col>
                    <Col className="ml-2">
                      <p className={style.open}>{deal.status}</p>
                    </Col>
                    <Col xs={12}>
                      <OrangeButton onClick={viewOrder} text="Order" />
                      <OrderModal
                        product={deal}
                        modalState={modal}
                        closeModal={handleClose}
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
            ) || <Skeleton duration={2} />
        )}
      </OverflowWrapper>
      {orders ? <OrderProduct closeOrderMenu={closeOrder} /> : null}
    </section>
  );
};

export default Category;
