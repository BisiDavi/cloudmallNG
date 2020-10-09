import AuthHeader from "./authHeader";
import { Container, Row, Button } from "react-bootstrap";

const SignupPage = () => {
  return (
    <Container className="authpage">
      <AuthHeader title="Sign Up" />
      <Row>
        <Button className="signup btn btn-danger">Continue with Google</Button>
      </Row>
      <p> Or</p>

      <Row>
        <Button className="login btn btn-danger">Continue with Email</Button>
      </Row>
      <p className="text-mute">
        By Clicking "Continue with Google/Email", I agree with the terms and
        conditions, you can also check our privacy policy
      </p>
    </Container>
  );
};

export default SignupPage;
