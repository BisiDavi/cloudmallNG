import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DealsCategory, ProductLayout } from '../imports';
import { fastDeliveries } from '../components/temp';

const FastDeliveries = () => {
  return (
    <ProductLayout
      headerTitle="Fast Deliveries"
      showHeader={true}
      showFooter={true}
    >
      <Container>
        <Row>
          <Col lg={6} sm={6}>
            <DealsCategory deals={fastDeliveries} />
          </Col>
        </Row>
      </Container>
    </ProductLayout>
  );
};

export default FastDeliveries;
