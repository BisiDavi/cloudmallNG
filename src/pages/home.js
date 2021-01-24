import React from 'react';
import useSWR from 'swr';
import Typewriter from 'typewriter-effect';
import { axiosInstance } from '../axios';
import {
  Layout,
  HomepageSlider,
  Searchbar,
  Category,
  CategoryTitle
} from '../imports';
import { featuredDeals } from '../components/temp';
import { AppNavbar } from '../components/homeComponents';
import style from '../styles/Home.module.css';

const Homepage = () => {
  const fetcher = url =>
    axiosInstance.post(url, { crossdomain: true }).then(res => res.data);

  const { data: result, error, loading } = useSWR('/app/landing', fetcher);
  console.log('data result', result);
  console.log('loading', loading);
  console.log('error', error);

  const { products } = result;
  console.log('products', products);

  const FeaturedDeals = () => {
    return <Category deals={featuredDeals} />;
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
          <div className="categories">
            <CategoryTitle title="Featured Deals" />
            {FeaturedDeals()}
          </div>
          <div className="categories">
            <CategoryTitle title="Fast Deliveries" />
            {FeaturedDeals()}
          </div>
          <div className="categories">
            <CategoryTitle title="Fresh Offers" />
            {FeaturedDeals()}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .categories {
            margin: 15px 10px !important;
          }
          a,
          p,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: Roboto;
          }
        `}
      </style>
    </Layout>
  );
};

export default Homepage;
