import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import AuthHeader from "./authHeader";
import { AuthButton } from "../../components/authComponent";

const Auth = () => {
  return (
    <Container className="authpage">
      <AuthHeader title="Sign Up or Login" />
      <Row>
        <Col xs={12} className="mt-4 d-flex flex-column">
          <Link href="/auth/signup">
            <a className="mx-auto w-75 text-decoration-none">
              <AuthButton>Sign Up</AuthButton>
            </a>
          </Link>
          <p className="text-center mt-3 mb-0"> Or</p>
        </Col>
        <Col xs={12} className="d-flex flex-column">
          <Link href="/auth/login">
            <a className="mx-auto w-75 text-decoration-none">
              <AuthButton>Login</AuthButton>
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
