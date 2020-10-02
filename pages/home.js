import {
  Layout,
  HomepageSlider,
  Searchbar,
  FetchProductAsync,
  Category
} from "../imports";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { wrapper } from "../redux/store/store";

const Homepage = props => {
  useEffect(() => {
    props.fetchProduct();
  });

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
          <Category categoryName="Featured Deals" />
          <Category categoryName="Fast Deliveries" />
          <Category categoryName="Fresh Offers" />
        </div>
      </div>
    </Layout>
  );
};

/* export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(FetchProductAsync());
}); */

const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: bindActionCreators(FetchProductAsync, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(Homepage);
