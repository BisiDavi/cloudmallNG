import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { googleIcon, Input, OrangeButton, Pageheader } from '../../imports';

const Login = () => {
  return (
    <Container className="signupemail px-4">
      <Pageheader title="Login" />
      <Row className="loginText d-flex flex-column">
        <Col className="withGoogle mt-2 px-4">
          <Link href="/auth/googlesignup">
            <a className="mx-auto w-75 mt-3 text-decoration-none">
              <button className="googleButton">
                <img
                  src={googleIcon}
                  className="mr-3"
                  alt="signin with google"
                />
                Continue with Google
              </button>
            </a>
          </Link>
          <p className="text-center m-2">Or</p>
          <p className="text-center withEmail mb-5">Continue with Email</p>
        </Col>
      </Row>
      <Row>
        <Col className="px-4">
          <form className="pb-5">
            <Input label="Email" type="email" />
            <Input label="Password" type="password" eyeIcon={true} />
            <p className="forgotPassword">
              <span className="text">Forgot Password</span>
            </p>
            <span className="button">
              <OrangeButton
                type="submit"
                text="Login"
                className="justify-content-center"
              />
            </span>
          </form>
          <p className="signup text-center mt-5">
            Don't have an account <span className="text">Signup</span>
          </p>
        </Col>
      </Row>
      <style jsx>
        {`
          .googleButton {
            padding: 10px 20px;
            border: 1px solid rgba(62, 64, 68, 1);
            background: transparent;
            margin: 50px auto 10px auto;
            display: flex;
            font-weight: bold;
            border-radius: 5px;
            width: 100%;
            justify-content: center;
          }
          .forgotPassword {
            text-align: right;
          }
          .text {
            line-height: 14px;
            letter-spacing: 0.01em;
            color: #f29100;
          }
          form span.button {
            margin-top: 50px;
          }
          p {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 16px;
          }
          .signup {
            font-weight: 700;
          }
        `}
      </style>
    </Container>
  );
};

export default Login;
