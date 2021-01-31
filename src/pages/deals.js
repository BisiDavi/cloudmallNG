import React from 'react';
import {
  Layout,
  FastDeliveries,
  FreshOffers,
  StoreFeaturedDeals
} from '../imports';
import style from '../styles/Home.module.css';

const Deals = () => {
  return (
    <Layout
      headerTitle="Home"
      showHeader={true}
      sliderStyle={true}
      showFooter={true}
    ></Layout>
  );
};

export default Deals;
