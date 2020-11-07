import { Layout, Searchbar } from "../../imports";
import { StoreHeader, CategoryView } from "../../components/storeComponents";
import { Container, Row } from "react-bootstrap";
import { RestaurantOffers } from "../../components/temp";
import style from "../../styles/storeComponent.module.css";

const Spa = () => {
  return (
    <Layout showHeader={false} showFooter={true} headerTitle="Spa">
      <section>
        <Container>
          <Row>
            <StoreHeader storeName="Spa" />
          </Row>
          <Row>
            <Searchbar />
          </Row>
          <Row>
            <CategoryView
              storeLink="/spa/spa"
              vendor="Spa"
              availableSubscribers={RestaurantOffers}
            />
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Spa;
