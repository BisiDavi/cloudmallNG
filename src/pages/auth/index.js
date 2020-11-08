import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import AuthHeader from "./authHeader";

const Auth = () => {
  return (
    <Container className="authpage">
      <AuthHeader title="Sign Up or Login" />
      <Row>
        <Col xs={12} className="mt-4 d-flex flex-column">
          <Link href="/auth/signup">
            <a className="mx-auto w-75">
              <Button
                variant="secondary"
                className="p-2 w-75 mx-auto justify-content-center d-flex font-weight-bold"
              >
                Sign Up
              </Button>
            </a>
          </Link>
          <p className="text-center m-3"> Or</p>
        </Col>
        <Col xs={12} className="d-flex flex-column">
          <Link href="/auth/login">
            <a className="mx-auto w-75">
              <Button
                variant="secondary"
                className="p-2 w-75 mx-auto justify-content-center d-flex font-weight-bold"
              >
                Login
              </Button>
            </a>
          </Link>
          <p className="text-mute text-center m-5">
            Signup or Login to complete your transaction
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
