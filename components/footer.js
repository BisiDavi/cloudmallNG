import { Container, Row, Col } from "react-bootstrap";
import { home, shop, list, cart } from "../imports";
import Link from "next/link";
import style from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <Container
      className={`${style.footer} mb-2 footer d-flex fixed-bottom px-3`}
      fluid
    >
      <Row>
        <Col xs={3} className="homeicon">
          <Link href="/home">
            <a>
              <img src={home} alt="home icon" />
              <p>Home</p>
            </a>
          </Link>
        </Col>
        <Col xs={3} className="storeicon">
          <Link href="/stores">
            <a>
              <img src={shop} alt="shop icon" />
              <p>Stores</p>
            </a>
          </Link>
        </Col>
        <Col xs={3} className="carticon">
          <Link href="/cart">
            <a>
              <img src={cart} alt="home icon" />
              <p>Cart</p>
            </a>
          </Link>
        </Col>
        <Col xs={3} className="ordericon">
          <Link href="/orders">
            <a>
              <img src={list} alt="order icon" />
              <p>Orders</p>
            </a>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
