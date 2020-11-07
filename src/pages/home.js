import {
  Layout,
  HomepageSlider,
  Searchbar,
  Category,
  CategoryTitle
} from "../imports";
import { featuredDeals } from "../components/temp";
import { AppNavbar } from "../components/homeComponents";
import style from '../styles/Home.module.css'


const Homepage = () => {
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
        `}
      </style>
    </Layout>
  );
};
export default Homepage;
