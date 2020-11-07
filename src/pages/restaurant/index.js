import { Layout, Searchbar } from "../../imports";
import { StoreHeader, CategoryView } from "../../components/storeComponents";
import { Container, Row } from "react-bootstrap";
import { RestaurantOffers } from "../../components/temp";
import style from "../../styles/storeComponent.module.css";

const Restaurant = () => {
  return (
    <Layout showHeader={false} showFooter={true} headerTitle="Restaurant">
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
              storeLink="/restaurant/ongbonna"
              vendor="Ongbonna"
              availableSubscribers={RestaurantOffers}
            />
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Restaurant;
