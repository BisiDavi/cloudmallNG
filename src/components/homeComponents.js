import { Container, Row, Col } from "react-bootstrap";

export const AppNavbar = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={3}>
          {/* <img
            src="logo"
            alt="cloudmallNg, your number 1 online grocery store"
          /> */}
          <h6>I am the logo</h6>
        </Col>
        <Col lg={6}>I am the Searchbar</Col>
        <Col lg={3}>
          <Row>
            <Col lg={1}>Login</Col>
            <Col lg={1}>Help</Col>
            <Col lg={1}>Cart</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
