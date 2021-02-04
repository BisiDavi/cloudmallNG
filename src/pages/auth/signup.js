import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { googleIcon, mailIcon, Pageheader } from '../../imports';
import { AuthButton } from '../../components/authComponent';

const SignupPage = () => {
  return (
    <Container className="authpage">
      <Pageheader title="Sign Up" />
      <Row>
        <Col xs={12} className="mt-4 d-flex flex-column">
          <Link href="/auth/googlesignup">
            <a className="mx-auto w-75 text-decoration-none mb-2">
              <AuthButton borderColor="rgba(62,64,68,1)">
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
              <AuthButton
                borderColor="none"
                backgroundColor="#f29100"
                color="white"
              >
                <i className="far fa-envelope mr-4"></i>
                Continue with Email
              </AuthButton>
            </a>
          </Link>
          <p>
            By Clicking "Continue with Google/Email", I agree with the terms and
            conditions, you can also check our privacy policy
          </p>
        </Col>
      </Row>
      <style jsx>
        {`
        p{
          font-size: 14px;
          font-family: 'Roboto', sans-serif;
          text-align:left;
          padding: 0px 35px;
          margin-top:40px;
        `}
      </style>
    </Container>
  );
};

export default SignupPage;
