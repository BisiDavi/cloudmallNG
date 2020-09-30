import Head from "next/head";
import { Layout } from "../imports";

const Homepage = () => {
  return (
    <Layout headerTitle="Home">
      <div className="Homepage">
        <div className="homepage">
          <h1>Welcome Home</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
