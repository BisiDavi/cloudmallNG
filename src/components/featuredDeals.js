import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DealsCategory, ProductLayout } from '../imports';

import { myFeaturedDeals } from '../components/temp';

const FeaturedDeals = () => {
  return (
    <ProductLayout
      headerTitle="Featured Deals"
      showHeader={true}
      showFooter={true}
    >
      <Container>
        <Row>
          <Col lg={6} sm={6}>
            <DealsCategory deals={myFeaturedDeals} />
          </Col>
        </Row>
      </Container>
    </ProductLayout>
  );
};

export default FeaturedDeals;
