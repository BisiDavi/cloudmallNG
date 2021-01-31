import React from 'react';
import { Category } from '../imports';
import { freshOffers } from '../components/temp';


const FreshOffers = () => {
  return (
    <Container>
      <Row>
        <Col lg={6} sm={6}>
          <Category deals={freshOffers} />
        </Col>
      </Row>
    </Container>
  );
};

export default FreshOffers;
