import { Pageheader, RadioButton, OrangeButton } from '../imports';
import { Container, Row, Col, Form } from 'react-bootstrap';

const SortPage = () => {
  const sortConditions = [
    'Sort by Price(Lowest to Highest)',
    'Sort by Price(Highest to Lowest)',
    'Sort by Category',
    'Sort by Store'
  ];
  return (
    <Container fluid>
      <Pageheader title="Sort" />
      <Row>
        <Col>
          <Form>
            {sortConditions.map(condition => (
              <RadioButton value={condition} label={condition} />
            ))}
            <OrangeButton text="Apply" className="justify-center" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SortPage;
