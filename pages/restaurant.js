import { Layout } from "../imports";
import {
  StoreHeader,
  StoreBanner,
  StoreAddress,
  DisplayOffers
} from "../components/storeComponents";
import { RestaurantOffers, EnglishOffers } from "../components/temp";
import style from "../styles/restaurant.module.css";


const Restaurant = () => {
  return (
    <Layout showHeader={false} showFooter={true} headerTitle="Restaurant">
      <section className={style.restaurant}>
        <StoreHeader storeName="Restaurant" />
        <div className="banner">
          <StoreBanner bannerName="Ongbonna" />
        </div>

        <div>
          <StoreAddress address="Behind Energy Filling station Ibadan Road." />
        </div>

        <div className="offerWrapper">
          <h6>Offers</h6>
          <DisplayOffers offers={RestaurantOffers} />

          <span className="d-flex">
            <h4>English</h4>
            <p>(30 - 40 mins)</p>
          </span>
          <DisplayOffers offers={EnglishOffers} />
        </div>
      </section>
    </Layout>
  );
};

export default Restaurant;
