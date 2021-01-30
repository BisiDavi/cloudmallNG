import { Pageheader, referralIcon } from '../imports';
import { Container, Row, Col } from 'react-bootstrap';

const InviteFriends = () => {
  return (
    <Container className="settings_page" fluid>
      <Pageheader title="Invite friends" />
      <Row>
        <Col xs={12} lg={12} sm={12}>
          <div className="d-flex mt-2 mb-5 flex-column mx-auto ">
            <p className="text-center">
              Your referral code is{' '}
              <span className="font-weight-bold">5060</span>
            </p>
            <button className="border-black rounded px-4 py-1 my-2 mx-auto">
              5060
            </button>
          </div>
          <img
            src={referralIcon}
            className="mx-auto d-flex mb-5"
            alt="invite your friend to use cloudmall"
          />
          <p className="text-center">
            You currently have
            <button className="rounded mx-3 py-1 px-4">500</button>
            cloud coins
          </p>
        </Col>
      </Row>
      <style jsx>
        {`
          button {
            border: 1px solid rgba(62, 64, 68, 0.25);
            background: white;
            box-sizing: border-box;
          }
          p {
            font-family: 'Roboto';
            font-size: 14px;
            color: #3e4044;
          }
        `}
      </style>
    </Container>
  );
};

export default InviteFriends;
