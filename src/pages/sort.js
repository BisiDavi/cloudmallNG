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
    <Container className="position-relative" fluid>
      <Pageheader title="Sort" />
      <Row>
        <Col>
          <Form>
            {sortConditions.map(condition => (
              <span className="sortlist" key={condition}>
                <p>{condition}</p>
                <RadioButton value={condition} />
              </span>
            ))}
            <span className="button">
              <OrangeButton text="Apply" className="justify-content-center" />
            </span>
          </Form>
        </Col>
      </Row>
      <style jsx>
        {`
          form {
            position: relative;
            height: 100vh;
          }
          .sortlist {
            display: flex;
            height: 40px;
            justify-content: space-between;
            margin: 10px;
          }
          .button {
            position: absolute;
            bottom: 120px;
            justify-content: center;
            width: 100%;
            padding: 0px 30px;
            left: 0;
          }
          .button button {
            justify-content: center;
            margin: auto;
          }
        `}
      </style>
    </Container>
  );
};

export default SortPage;
