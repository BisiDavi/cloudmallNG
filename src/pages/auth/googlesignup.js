import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { Pageheader, OrangeButton } from '../../imports';
import styles from '../../styles/googlesignup.module.css';

const GoogleSignup = () => {
  const [otp, setOtp] = useState('');
  const handleChange = () => setOtp(otp);
  return (
    <Container>
      <Pageheader title="Verify your account" />
      <Row className="px-3">
        <Col xs={12} className="mt-3 mb-2">
          <p className="text-center">
            A verification code was sent to op*****t****u@gmail.com and
            +23470******07
          </p>
        </Col>
        <Col xs={12} className="mt-3">
          <form className="mx-auto">
            <div className="otp">
              <label>Enter Code</label>
              <OtpInput
                containerStyle={styles.containerStyle}
                value={otp}
                inputStyle={styles.inputStyle}
                onChange={handleChange}
                numInputs={6}
                isInputNum={true}
              />
              <div className="right">
                <p>Didn't get the code ?</p> <b>Resend</b>
              </div>
              <p>Verification code expires after 10 minutes</p>
            </div>
            <Link href="/home">
              <a className="w-75 p-2 mx-auto text-decoration-none">
                <OrangeButton
                  className="justify-content-center"
                  text="Continue"
                />
              </a>
            </Link>
          </form>
        </Col>
      </Row>
      <style jsx>
        {`
          .form input {
            height: 35px !important;
            width: 100% !important;
          }
          .form {
            display: flex;
            margin: 20px 0px;
          }
          p {
            font-size: 12px;
            color: #3e4044;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: normal;
            line-height: 14px;
          }
          form p {
            margin-top: 35px;
          }
          p.text-center {
            margin: 40px auto 20px auto;
          }
          label {
            font-family: 'Roboto';
            font-size: 14px;
            color: #3e4044;
            font-weight: bold;
          }
          .otp {
            display: flex;
            flex-direction: column;
            margin: auto;
          }
          .right p {
            font-style: italic;
            margin-right: 8px;
            margin-top: 15px;
          }
          .right {
            justify-content: flex-end;
            margin: 10px 0px;
            display: flex;
            height:20px;
            align-items: center;
          }
        `}
      </style>
    </Container>
  );
};

export default GoogleSignup;
