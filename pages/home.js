import {
  Layout,
  HomepageSlider,
  Searchbar,
  Category,
  CategoryTitle
} from "../imports";
import { featuredDeals } from "../components/temp";

const Homepage = props => {
  
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
