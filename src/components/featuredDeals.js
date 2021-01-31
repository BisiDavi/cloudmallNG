import React from 'react';
import { Category } from '../imports';
import { myfeaturedDeals } from '../components/temp';

const StoreFeaturedDeals = () => {
  return (
    <Container>
      <Row>
        <Col lg={6} sm={6}>
          <Category deals={myfeaturedDeals} />
        </Col>
      </Row>
    </Container>
  );
};

export default StoreFeaturedDeals;
