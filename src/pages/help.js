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
              <li key={link.id}>
                <p>{link.title}</p>
                <i className="fas fa-chevron-right"></i>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <style jsx>
        {`
          li {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(62, 64, 68, 0.25);
            margin: 20px 0px;
            height: 30px;
            padding-bottom: 10px;
            align-items: center;
          }
          li svg {
            color: #f29100;
          }
          li p {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            margin: 0px;
            color: #000000;
          }

          li:last-child {
            border-bottom: none;
          }
        `}
      </style>
    </Container>
  );
};

export default Help;
