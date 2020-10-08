import { Layout, Searchbar } from "../../imports";
import { StoreHeader, CategoryView } from "../../components/storeComponents";
import { Container, Row } from "react-bootstrap";
import { RestaurantOffers } from "../../components/temp";
import style from "../../styles/storeComponent.module.css";

const Bookshop = () => {
  return (
    <Layout showHeader={false} showFooter={true} headerTitle="Bookshop">
      <section>
        <Container>
          <Row>
            <StoreHeader storeName="Bookshop" />
          </Row>
          <Row>
            <Searchbar />
          </Row>
          <Row>
            <CategoryView
              vendor="Bookshop"
              storeLink="/bookshop/bookshop"
              availableSubscribers={RestaurantOffers}
            />
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Bookshop;
