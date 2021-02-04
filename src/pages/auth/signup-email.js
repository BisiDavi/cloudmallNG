import { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Pageheader, Input, OrangeButton } from '../../imports';

const SignupEmail = () => {
  const [referralCode, setReferralCode] = useState(false);

  const showReferralInput = () => setReferralCode(true);
  const hideReferralInput = () => setReferralCode(false);
  const ReferralCode = () => {
    return (
      <div className="referral">
        {referralCode ? (
          <>
            <p onClick={hideReferralInput}>I don't have a Referral Code</p>
            <Input
              label="Referral Code"
              placeholder="************"
              type="text"
            />
          </>
        ) : (
          <p onClick={showReferralInput}>I have a Referral Code</p>
        )}
        <style jsx>
          {`
            .referral p {
              color: #f29100;
              margin-top: 15px;
            }
          `}
        </style>
      </div>
    );
  };

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
          eyeIcon={true}
        />
        <Input label="Password" placeholder="************" type="password" />
        <span className="button">
          <OrangeButton
            className="justify-content-center"
            type="submit"
            text="Sign Up"
          />
        </span>
        <div className="referralcode_section">{ReferralCode()}</div>
      </form>
      <style jsx>
        {`
          .referralcode_section p {
            color: #f29100;
            margin-top: 15px;
          }
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
