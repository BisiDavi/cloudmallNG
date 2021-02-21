import { Container, Row, Col } from 'react-bootstrap';
import { Pageheader } from '../imports';

const displayPolicy = () => {
  let PolicyArray = [];
  const terms =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci at egestas etiam et leo arcu. Mattis pharetra, augue ullamcorper in.';

  for (let i = 0; i <= 4; i++) {
    PolicyArray.push(`Policy ${i + 1}.`);
  }

  return PolicyArray.map((policy, index) =>
    index === 4 ? (
      <Col  key={policy} lg={12} sm={12}>
        <h4>{policy}</h4>
        <p>A. {terms}</p>
        <p>B. {terms}</p>
      </Col>
    ) : (
      <Col key={policy} lg={12} sm={12}>
        <h4>{policy}</h4>
        <p>{terms}</p>
      </Col>
    )
  );
};

const PrivacyPolicy = () => {
  return (
    <Container className="privacyPolicy">
      <Pageheader title=" Privacy Policy" />
      <Row className="p-3">{displayPolicy()}</Row>
    </Container>
  );
};

export default PrivacyPolicy;
