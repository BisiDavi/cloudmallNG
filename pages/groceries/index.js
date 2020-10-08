import { Layout, Searchbar } from "../../imports";
import { StoreHeader, CategoryView } from "../../components/storeComponents";
import { Container, Row } from "react-bootstrap";
import { RestaurantOffers } from "../../components/temp";
import style from "../../styles/storeComponent.module.css";

const Groceries = () => {
  return (
    <Layout showHeader={false} showFooter={true} headerTitle="Groceries">
      <section>
        <Container>
          <Row>
            <StoreHeader storeName="Groceries" />
          </Row>
          <Row>
            <Searchbar />
          </Row>
          <Row>
            <CategoryView
            storeLink="/groceries/groceries"
             vendor="Groceries" availableSubscribers={RestaurantOffers}
              />
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Groceries;
