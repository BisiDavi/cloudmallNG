import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { googleIcon, Input, OrangeButton, Pageheader } from '../../imports';

const Login = () => {
  return (
    <Container className="signupemail">
      <Pageheader title="Login" />
      <Row className="loginText d-flex flex-column">
        <Col className="withGoogle mt-2">
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
          <form>
            <Input label="Email" type="email" />
            <Input label="Password" type="password" eyeIcon={true} />

            <OrangeButton
              type="submit"
              text="Login"
              className="justify-content-center"
            />
          </form>
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
          }
        `}
      </style>
    </Container>
  );
};

export default Login;
