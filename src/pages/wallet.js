import { Container, Row, Col } from 'react-bootstrap';
import { OrangeButton, walletImg, Pageheader } from '../imports';

const Wallet = () => {
  return (
    <Container className="wallet">
      <Pageheader title="My Wallet" />
      <Row>
        <Col>
          <p className="text-center mt-3">
            The current balance in your cloud wallet is{' '}
          </p>
          <button className="amountBtn btn" disable>
            N1,040.00
          </button>
          <img src={walletImg} alt="wallet icon" />

          <form className="walletForm">
            <label>Enter amount to add</label>
            <input name="wallet_amount" />
            <OrangeButton
              text="Add Amount"
              className="justify-content-center"
            />
          </form>
        </Col>
      </Row>
      <style jsx>
        {`
          button.amountBtn {
            border: 1px solid rgba(62, 64, 68, 0.25);
            background: white;
            padding: 5px 15px !important;
            margin: 10px auto !important;
          }
          img {
            width: 150px;
            height: 97px;
            margin: 30px auto !important;
            display: flex;
          }
          .walletForm {
            display: flex;
            width: 80%;
            margin: auto !important;
            flex-direction: column;
          }
          .walletForm input {
            margin-bottom: 50px !important;
            border-radius: 5px;
            height: 40px;
            margin: 10px 0px 50px 0px !important;
            border: 1px solid rgba(242, 145, 0, 1);
          }
          p,
          label {
            font-family: Roboto;
            font-style: normal;
            font-size: 14px;
            line-height: 16px;
          }
          p {
            font-weight: normal;
            text-align: center;
            color: #000000;
          }

          label {
            font-weight: bold;
            color: #3e4044;
          }
        `}
      </style>
    </Container>
  );
};

export default Wallet;
