import AuthHeader from "./authHeader";
import { Container, Row, Button } from "react-bootstrap";

const Auth = () => {
  return (
    <Container className="authpage">
      <AuthHeader title="Sign Up or Login" />
      <Row>
        <Button className="signup btn btn-danger">Sign Up</Button>
      </Row>
      <p> Or</p>

      <Row>
        <Button className="login btn btn-danger">Login</Button>
      </Row>
      <p className="text-mute">Signup or Login to complete your transaction</p>
    </Container>
  );
};

export default Auth;
