import { Container, Row, Col } from "react-bootstrap";
import { hamburger, man, heart } from "../imports";
import Link from "next/link";
import homeStyle from "../styles/Home.module.css";

const Header = () => {
  return (
    <Container className={`${homeStyle.header} py-2 px-1 m-auto`} fluid>
      <Row>
        <Col xs={1} className="ml-4 mr-3">
          <img src={hamburger} alt="menu bar icon" />
        </Col>
        <Col xs={7} className="d-block">
          <span>Now</span>
        </Col>
        <Col xs={1} className="mr-2">
          <img src={man} alt="user icon" />
        </Col>
        <Col xs={1}>
          <img src={heart} alt="heart icon" />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
