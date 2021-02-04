import { Pageheader, Input, OrangeButton } from '../../imports';
import { Container, Spinner } from 'react-bootstrap';

const SignupEmail = () => {
  return (
    <Container className="signupemail bg-white" fluid>
      <Pageheader title="Continue with Email" />
      <form>
        <Input
          label="Name"
          placeholder="What would you like us to call you"
          type="text"
        />
        <Input label="Email" placeholder="cloudmall@gmail.com" type="email" />
        <Input label="Phone number" placeholder="+2347000000007" type="text" />
        <Input
          label="Password"
          placeholder="************"
          type="password"
          fieldVisible={true}
        />
        <Input label="Password" placeholder="************" type="password" />
        <span className="button">
          <OrangeButton
            className="justify-content-center"
            type="submit"
            text="Sign Up"
          />
        </span>
      </form>
      <style jsx>
        {`
          form {
            margin-top: 70px;
            position: relative;
            height: 85vh;
            padding: 0px 15px;
          }
          form .button {
            position: absolute;
            bottom: 30px;
            width: 100%;
            left: 0px;
            padding: 0px 15px;
          }
        `}
      </style>
    </Container>
  );
};

export default SignupEmail;
