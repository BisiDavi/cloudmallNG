import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Container, Row, Col, Button } from "react-bootstrap";
import OverflowWrapper from "react-overflow-wrapper";
import { eyeIcon, OrderModal, starIcon, OrderProduct } from "../imports";
import style from "../styles/category.module.css";

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
                  <span className={style.eyeicon}>
                    <img src={eyeIcon} alt="product view" />
                  </span>
                  {(
                    <img
                      className={style.productImage}
                      src={deal.image}
                      alt={deal.name}
                    />
                  ) || <Skeleton duration={2} />}
                  <span className={style.duration}>{deal.duration}</span>
                </span>
                <Container className={style.details}>
                  <Row>
                    <Col xs={8}>
                      <h5>{deal.name}</h5>
                    </Col>
                    <Col xs={4}>
                      <strong>{deal.price}</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-2">
                      <p>{deal.vendor}</p>
                    </Col>
                    <Col className="d-flex">
                      <img src={starIcon} alt="rating" />
                      <p>{deal.rating}</p>
                    </Col>
                    <Col className="ml-2">
                      <p>{deal.status}</p>
                    </Col>
                    <Col xs={12}>
                      <Button onClick={viewOrder} variant="outline-success">
                        Order
                      </Button>
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
