import { Container, Row, Col } from 'react-bootstrap';
import { Pageheader } from '../imports';

const Help = () => {
  const helpLinks = [
    { id: 1, title: 'Terms and Conditions' },
    { id: 2, title: 'FAQs' },
    { id: 3, title: 'Privacy Policy' }
  ];
  return (
    <Container>
      <Pageheader title="Help" />
      <Row>
        <Col className="h-50" lg={12} sm={12}>
          <ul>
            {helpLinks.map(link => (
              <span>
                <li key={link.id}>{link.title}</li>
                <i className="fas fa-chevron-right"></i>
              </span>
            ))}
          </ul>
        </Col>
      </Row>
      <style jsx>
        {`
          li span {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(62, 64, 68, 0.25);
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
          }
          li svg {
            color: #f29100;
          }
        `}
      </style>
    </Container>
  );
};

export default Help;
