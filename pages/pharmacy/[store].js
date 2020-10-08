import { Layout } from "../../imports";
import {
  StoreHeader,
  StoreBanner,
  StoreAddress,
  DisplayOffers
} from "../../components/storeComponents";
import { RestaurantOffers, EnglishOffers } from "../../components/temp";
import style from "../../styles/storeComponent.module.css";
import { useRouter } from "next/router";

const Store = () => {
  const router = useRouter();
  const { store } = router.query;
  return (
    <Layout showHeader={false} showFooter={true} headerTitle={`${store}`}>
      <section className={style.restaurant}>
        <StoreHeader storeName="Pharmacy" />
        <div className="banner">
          <StoreBanner bannerName={`${store}`} />
        </div>

        <div>
          <StoreAddress address="Behind Energy Filling station Ibadan Road." />
        </div>

        <div className={style.offerWrapper}>
          <h5 className="mr-2 ml-4">Offers</h5>
          <DisplayOffers offers={RestaurantOffers} />

          <span className="d-flex ml-4">
            <h5 className="mr-2">English</h5>
            <p>(30 - 40 mins)</p>
          </span>
          <DisplayOffers offers={EnglishOffers} />
        </div>
      </section>
    </Layout>
  );
};

export default Store;
