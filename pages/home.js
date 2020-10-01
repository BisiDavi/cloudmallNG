import Head from "next/head";
import { Layout,HomepageSlider } from "../imports";

const Homepage = () => {
  return (
    <Layout 
    headerTitle="Home" 
    showHeader={true} 
    sliderStyle={true}
    showFooter={true}>
      <div className="Homepage">
        <div className="homepage">
          <HomepageSlider />
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
