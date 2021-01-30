import { Pageheader } from '../imports';
import { Container, Row, Col } from 'react-bootstrap';

const Reviews = () => {
  return (
    <Container>
      <Pageheader title="Reviews" />
      <Row>
        <Col className="h-50" lg={12} sm={12}></Col>
      </Row>
    </Container>
  );
};

export default Reviews;
