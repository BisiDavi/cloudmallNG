import { Layout, Searchbar } from "../../imports";
import { StoreHeader, CategoryView } from "../../components/storeComponents";
import { Container, Row } from "react-bootstrap";
import { RestaurantOffers } from "../../components/temp";
import style from "../../styles/storeComponent.module.css";

const Rawfood = () => {
  return (
    <Layout showHeader={false} showFooter={true} headerTitle="Rawfood">
      <section>
        <Container>
          <Row>
            <StoreHeader storeName="Rawfood" />
          </Row>
          <Row>
            <Searchbar />
          </Row>
          <Row>
            <CategoryView
            storeLink="/raw-food/raw-food" 
             vendor="Raw-food" availableSubscribers={RestaurantOffers} />
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Rawfood;
