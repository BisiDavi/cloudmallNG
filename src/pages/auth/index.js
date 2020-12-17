import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import {Pageheader} from "../../imports";
import { AuthButton } from "../../components/authComponent";

const Auth = () => {
  return (
    <Container className="authpage">
      <Pageheader title="Sign Up or Login" />
      <Row>
        <Col xs={12} className="mt-4 d-flex flex-column">
          <Link href="/auth/signup">
            <a className="mx-auto w-75 text-decoration-none">
              <AuthButton 
              backgroundColor="#f29100" 
              color="white"
              >
                Sign Up
              </AuthButton>
            </a>
          </Link>
          <p className="text-center mt-3 mb-0"> Or</p>
        </Col>
        <Col xs={12} className="d-flex flex-column">
          <Link href="/auth/login">
            <a className="mx-auto w-75 text-decoration-none">
              <AuthButton
                borderColor="#f29100"
                backgroundColor="white"
                color="#f29100"
              >
                Login
              </AuthButton>
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
