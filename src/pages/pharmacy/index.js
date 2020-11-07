import { Layout, Searchbar } from "../../imports";
import { StoreHeader, CategoryView } from "../../components/storeComponents";
import { Container, Row } from "react-bootstrap";
import { RestaurantOffers } from "../../components/temp";
import style from "../../styles/storeComponent.module.css";

const Pharmacy = () => {
  return (
    <Layout showHeader={false} showFooter={true} headerTitle="Pharmacy">
      <section>
        <Container>
          <Row>
            <StoreHeader storeName="Pharmacy" />
          </Row>
          <Row>
            <Searchbar />
          </Row>
          <Row>
            <CategoryView
              vendor="Pharmacy"
              storeLink="/pharmacy/pharmacy"
              availableSubscribers={RestaurantOffers}
            />
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Pharmacy;
