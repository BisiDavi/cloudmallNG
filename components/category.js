import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FetchProductAsync } from "../imports";
import { rightArrowIcon, eyeIcon } from "../imports";
import style from "../styles/category.module.css";

const Category = props => {
  return (
    <section className={style.category}>
      <div className={style.categoryname}>
        <div className="float-left">
          <h5>{props.categoryName}</h5>
        </div>
        <div className={`${style.arrowIcon} float-right `}>
          <img src={rightArrowIcon} alt="rightIcon" />
        </div>
      </div>
      <Container>
        <Row>
          <Col xs={4}>
            <Card className={style.product}>
              <span className={style.eyeicon}>
                <img src={eyeIcon} alt="product view" />
              </span>
              <Card.Img
                variant="top"
                className={style.productImage}
                src={props.image}
                alt={props.name}
              />
              <span className={style.duration}>{props.duration}</span>
              <Card.Body className={style.details}>
                <Row>
                  <Col>
                    <Card.Title>{props.name}</Card.Title>
                  </Col>
                  <Col>
                    <Card.Text>{props.price}</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>
                    <Card.Text>{props.vendor}</Card.Text>
                  </Col>
                  <Col xs={4}>
                    <Card.Text>{props.rating}</Card.Text>
                  </Col>
                  <Col xs={4}>
                    <Card.Text>{props.status}</Card.Text>
                  </Col>
                  <Col xs={12}>
                    <Button variant="outline-success">Order</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = state => ({
  product: state.product
});

const mapDispatchToProps = dispatch => {
  return {
    product: bindActionCreators(FetchProductAsync, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Category);
