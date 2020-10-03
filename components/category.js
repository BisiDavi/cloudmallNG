import Skeleton from "react-loading-skeleton";
import { Container, Row, Col, Button } from "react-bootstrap";
import OverflowWrapper from "react-overflow-wrapper";
import { eyeIcon, starIcon } from "../imports";
import style from "../styles/category.module.css";

const Category = props => {
  return (
    <section className={style.category}>
      <OverflowWrapper className={style.overflowWrapper}>
        {props.deals.map(
          deal =>
            (
              <div key={deal.id} className={style.product}>
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
                      <Button variant="outline-success">Order</Button>
                    </Col>
                  </Row>
                </Container>
              </div>
            ) || <Skeleton duration={2} />
        )}
      </OverflowWrapper>
    </section>
  );
};

export default Category;
