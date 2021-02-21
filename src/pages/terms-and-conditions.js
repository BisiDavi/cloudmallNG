import { Container, Row, Col } from 'react-bootstrap';
import { Pageheader } from '../imports';
import { terms } from '../../json/termsAndCondition.json';

const TermsAndCondition = () => (
  <Container className="termsAndConditions">
    <Pageheader title="Terms and Conditions" />
    <Row className="p-3">
      {terms.map(term => {
        const termContent2 = term.content2 ? term.content2 : null;
        return (
          <Col lg={12} sm={12} key={term.id}>
            <h3>{term.title}</h3>
            <p>{term.content}</p>
            <p>{termContent2}</p>
          </Col>
        );
      })}
    </Row>
    <style jsx>
      {`
        p {
          text-align: left;
        }
      `}
    </style>
  </Container>
);

export default TermsAndCondition;
