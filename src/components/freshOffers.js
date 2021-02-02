import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DealsCategory, ProductLayout } from '../imports';
import { freshOffers } from '../components/temp';

const FreshOffers = () => {
  return (
    <ProductLayout
      headerTitle="Fresh Offers"
      showHeader={true}
      showFooter={true}
    >
      <Container>
        <Row>
          <Col lg={6} sm={6}>
            <DealsCategory deals={freshOffers} />
          </Col>
        </Row>
      </Container>
    </ProductLayout>
  );
};

export default FreshOffers;
