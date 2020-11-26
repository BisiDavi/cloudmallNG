import { Layout, emoji404, OrangeButton } from "../imports";

const Page404 = () => {
  return (
    <Layout
      headerTitle="404 page, an Error occurred"
      showHeader={true}
      showFooter={true}
    >
      <div className="404_page d-flex vh-100 flex-column">
        <div className="emoji_image mx-auto">
          <img src={emoji404} alt="404 error page" />
        </div>
        <div className="content-text mb-2">
          <h6 className="text-center mb-2">
            We're Sorry we're not yet at your location.
          </h6>
          <p className="suggest text-center">
            Help us cater for your needs by suggesting your favourite store
            close to you.
          </p>
        </div>
        <div className="button mt-4">
          <OrangeButton buttonMargin="auto !important" text="Suggest Store" />
        </div>
      </div>
      <style jsx>
        {`
          .suggest {
            width: 80%;
            font-size: 13px !important;
            margin: auto !important;
            display: flex;
          }
          .emoji_image {
            margin-top: 150px !important;
            margin-bottom: 40px !important;
          }
          .button button {
            display: flex;
            margin: auto !important;
          }
        `}
      </style>
    </Layout>
  );
};

export default Page404;
