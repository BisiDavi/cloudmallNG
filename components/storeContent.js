import { Container, Row, Col, Card,Button } from "react-bootstrap";
import style from "../styles/category.module.css";


const Category = props => {
  return (
    <Container className="store">
      <Row>
        <Col xs={4}>
          <Card className={style.product}>
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
                <Col xs={12}>
                  <Button variant="outline-success">Order</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
