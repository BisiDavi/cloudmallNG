import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { FeaturedDeals, FreshOffers, FastDeliveries } from '../imports';
import styles from '../styles/deals.module.css';

const Deals = () => {
  return (
    <div id="dealspage">
      <Tabs
        className={styles.tabs}
        defaultActiveKey="featuredDeals"
        id="deals-tab"
      >
        <Tab
          tabClassName={styles.tab}
          eventKey="featuredDeals"
          title="Featured deals"
        >
          <FeaturedDeals />
        </Tab>
        <Tab
          tabClassName={styles.tab}
          eventKey="fastdeliveries"
          title="Fast deliveries"
        >
          <FastDeliveries />
        </Tab>
        <Tab
          tabClassName={styles.tab}
          eventKey="freshOffers"
          title="Fresh Offers"
        >
          <FreshOffers />
        </Tab>
        <Tab
          tabClassName={styles.tab}
          eventKey="awesomeDeals"
          title="Awesome deals"
        >
          <FeaturedDeals />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Deals;
