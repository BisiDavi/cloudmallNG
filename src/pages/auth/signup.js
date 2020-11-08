import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";
import { googleIcon, mailIcon } from "../../imports";
import AuthHeader from "./authHeader";

const SignupPage = () => {
  return (
    <Container className="authpage">
      <AuthHeader title="Sign Up" />
      <Row>
        <Col xs={12} className="mt-4 d-flex flex-column">
          <Link href="/auth/googlesignup">
            <a className="mx-auto w-75">
              <Button
                variant="secondary"
                className="p-2 w-100 mx-auto justify-content-center d-flex font-weight-bold"
              >
                <img
                  src={googleIcon}
                  className="mr-3"
                  alt="signin with google"
                />
                Continue with Google
              </Button>
            </a>
          </Link>
          <p className="text-center m-3"> Or</p>
        </Col>
        <Col xs={12} className="d-flex flex-column">
          <Link href="/auth/signup-email">
            <a className="mx-auto w-75">
              <Button
                variant="secondary"
                className="p-2 w-100 mx-auto justify-content-center d-flex font-weight-bold"
              >
                <img
                  src={mailIcon}
                  className="mr-3 mt-1"
                  alt="sign up with email"
                />
                Continue with Email
              </Button>
            </a>
          </Link>
          <p className="text-mute text-center m-5">
            By Clicking "Continue with Google/Email", I agree with the terms and
            conditions, you can also check our privacy policy
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
