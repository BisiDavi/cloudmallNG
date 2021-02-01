import React from 'react';
import { ProductLayout, FeaturedDeals } from '../imports';

const tabLinks = [
  { id: 1, tabName: 'Featured deals' },
  { id: 2, tabName: 'Featured deliveries' },
  { id: 2, tabName: 'Fresh offers' }
];

const Deals = () => {
  return (
    <ProductLayout
      headerTitle="Featured Deals"
      showHeader={true}
      showFooter={true}
    >
      <FeaturedDeals />
    </ProductLayout>
  );
};

export default Deals;
