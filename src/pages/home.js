import React from 'react';
import Typewriter from 'typewriter-effect';
import {
  Layout,
  HomepageSlider,
  Searchbar,
  Category,
  CategoryTitle
} from '../imports';
import {
  myFeaturedDeals,
  freshOffers,
  fastDeliveries
} from '../components/temp';
import { AppNavbar } from '../components/homeComponents';
import style from '../styles/Home.module.css';

const Homepage = () => {
  const FeaturedDeals = () => {
    return <Category deals={myFeaturedDeals} />;
  };
  const FreshOffers = () => {
    return <Category deals={freshOffers} />;
  };
  const FastDeliveries = () => {
    return <Category deals={fastDeliveries} />;
  };
  return (
    <Layout
      headerTitle="Home"
      showHeader={true}
      sliderStyle={true}
      showFooter={true}
    >
      <div className="Homepage">
        <div className="homepage">
          <nav className={style.nav}>
            <AppNavbar />
          </nav>
          <HomepageSlider />
          <div className={`${style.typewriter} text-center`}>
            <Typewriter
              options={{
                strings: [
                  `Do you need Groceries,Pastries or Raw Foods?`,
                  'We have you covered, with our reliable delivery services'
                ],
                autoStart: true,
                loop: true
              }}
            />
          </div>
          <Searchbar />
          <div className="product_categories">
            <div className="categories">
              <CategoryTitle
                title="Featured Deals"
                linkTo="deals#featuredDeals"
              />
              {FeaturedDeals()}
            </div>
            <div className="categories">
              <CategoryTitle
                title="Fast Deliveries"
                linkTo="deals#fastdeliveries"
              />
              {FastDeliveries()}
            </div>
            <div className="categories">
              <CategoryTitle title="Fresh Offers" linkTo="deals#freshOffers" />
              {FreshOffers()}
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .product_categories {
            padding: 0px 10px;
            margin-bottom: 60px;
          }
          .categories {
            margin: 15px 0px;
          }
          a,
          p,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: 'Roboto';
          }
        `}
      </style>
    </Layout>
  );
};

export default Homepage;
