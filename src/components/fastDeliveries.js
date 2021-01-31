;


import React from 'react';
import { Category } from '../imports';
import { fastDeliveries } from '../components/temp';


const FastDeliveries = () => {
  return (
    <Container>
      <Row>
        <Col lg={6} sm={6}>
          <Category deals={fastDeliveries} />
        </Col>
      </Row>
    </Container>
  );
};

export default FastDeliveries;
