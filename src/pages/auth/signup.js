import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";
import { googleIcon, mailIcon, Pageheader } from "../../imports";
import { AuthButton } from "../../components/authComponent";

const SignupPage = () => {
  return (
    <Container className="authpage">
      <Pageheader title="Sign Up" />
      <Row>
        <Col xs={12} className="mt-4 d-flex flex-column">
          <Link href="/auth/googlesignup">
            <a className="mx-auto w-75 text-decoration-none mb-2">
              <AuthButton>
                <img
                  src={googleIcon}
                  className="mr-3"
                  alt="signin with google"
                />
                Continue with Google
              </AuthButton>
            </a>
          </Link>
          <p className="text-center mt-4 mb-1"> Or</p>
        </Col>
        <Col xs={12} className="d-flex flex-column">
          <Link href="/auth/signup-email">
            <a className="mx-auto w-75 text-decoration-none">
              <AuthButton>
                <img
                  src={mailIcon}
                  className="mr-3 mt-1"
                  alt="sign up with email"
                />
                Continue with Email
              </AuthButton>
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
