import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import { Container, Button, Row, Col } from "react-bootstrap";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import style from "../styles/cart.module.css";

export const CartView = ({ cartItems }) => {
  return (
    <Container className={style.cartView}>
      {cartItems.map(cartItem => (
        <Row className={style.cartItem}>
          <Col xs={3}>{cartItem.image}</Col>
          <Col xs={9} className={style.details}>
            <div className="d-flex">
              <h3>{cartItem.name}</h3>
              <h4>{cartItem.price}</h4>
            </div>
            <div className="d-flex">
              <RoomOutlinedIcon />
              {cartItem.vendor}
            </div>
            <div className="d-flex justify-content-between">
              <Col xs={2}>
                <DeleteForeverOutlinedIcon />
              </Col>
              <Col xs={2}>
                <RemoveIcon />
              </Col>
              <Col xs={4}>
                {cartItem.value}
                {cartItem.value > 1 ? "Pieces" : "Pack"}
              </Col>
              <Col xs={2}>
                <AddIcon />
              </Col>
            </div>
          </Col>
        </Row>
      ))}

      <Row className="d-flex justify-content-between">
        <Col>Total Cost</Col>
        <Col>N3200</Col>
      </Row>
      <Row>
        <Button className="btn btn-success text-white font-weight-bold w-75">
          Checkout
        </Button>
      </Row>
    </Container>
  );
};
