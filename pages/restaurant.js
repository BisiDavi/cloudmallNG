import { Layout, Searchbar } from "../imports";
import {
  StoreHeader,
  StoreBanner,
  StoreAddress,
  DisplayOffers,
  CategoryView
} from "../components/storeComponents";
import { Container, Row } from "react-bootstrap";
import { RestaurantOffers, EnglishOffers } from "../components/temp";
import style from "../styles/storeComponent.module.css";

const Restaurant = () => {
  return (
    <Layout showHeader={false} showFooter={true} headerTitle="Restaurant">
      {/* <section className={style.restaurant}>
          <StoreHeader storeName="Restaurant" />
          <div className="banner">
            <StoreBanner bannerName="Ongbonna" />
          </div>

          <div>
            <StoreAddress address="Behind Energy Filling station Ibadan Road." />
          </div>

          <div className={style.offerWrapper}>
            <h5 className="mr-2 ml-4">Offers</h5>
            <DisplayOffers offers={RestaurantOffers} />

            <span className="d-flex ml-4 categoryEnglish">
              <h5 className="mr-2">English</h5>
              <p>(30 - 40 mins)</p>
            </span>
            <DisplayOffers offers={EnglishOffers} />
          </div>
        </section> */}
      <section>
        <Container>
          <Row>
             <StoreHeader storeName="Restaurant" />
          </Row>
          <Row>
            <Searchbar />
          </Row>
          <Row>
            <CategoryView 
            availableSubscribers={RestaurantOffers} />
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Restaurant;
