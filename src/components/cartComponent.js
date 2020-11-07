import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import { Container, Button, Row, Col } from "react-bootstrap";
import Link from "next/link";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import style from "../styles/cart.module.css";

export const CartView = ({ cartItems }) => {
  return (
    <Container className={style.cartComponent}>
      <Container className={style.cartView}>
        {cartItems.map(cartItem => (
          <Row key={cartItem.id} className={`${style.cartItem} p-2`}>
            <Col xs={3}>
              <img src={cartItem.image} />
            </Col>
            <Col xs={9} className={style.details}>
              <div className="d-flex justify-content-between">
                <h3 className="font-weight-bold">{cartItem.name}</h3>
                <h4 className="mr-4">N {cartItem.price}</h4>
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
      </Container>
      <Container className={style.totalcost}>
        <Row className="d-flex text-center py-2 border justify-content-between">
          <Col className="font-weight-bold">Total Cost</Col>
          <Col>N3200</Col>
        </Row>
        <Row>
          <Link href="/delivery">
            <a>
              <Button
                className="btn btn-secondary 
          text-white m-auto font-weight-bold w-75 p-2"
              >
                Checkout
              </Button>
            </a>
          </Link>
        </Row>
      </Container>
    </Container>
  );
};
