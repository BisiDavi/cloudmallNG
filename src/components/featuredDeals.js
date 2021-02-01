import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DealsCategory } from '../imports';

import { myFeaturedDeals } from '../components/temp';

const FeaturedDeals = () => {
  return (
    <Container>
      <Row>
        <Col lg={6} sm={6}>
          <DealsCategory deals={myFeaturedDeals} />
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedDeals;
