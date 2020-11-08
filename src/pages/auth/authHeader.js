import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useRouter } from "next/router";
import Head from "next/head";

const AuthHeader = ({ title }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <script
          src="https://kit.fontawesome.com/83f2ab5e93.js"
          crossOrigin="anonymous"
        ></script>
        <title>🛒 CloudMallNG - {title}</title>
      </Head>
      <div className="authHeader">
        <div className="d-flex authheader">
          <div onClick={() => router.back()} className="arrow">
            <ArrowBackIcon />
          </div>
          <h5 className="text-center authtext font-weight-bold">{title}</h5>
        </div>
        <style jsx>
          {`
            .authheader {
              border-bottom: 1px solid black;
              display: flex !important;
            }
            .arrow {
              width: 50px;
              position: absolute;
              margin-top: 5px !important;
              margin-left: 10px !important;
            }
            .authtext {
              padding-top: 5px !important;
              text-align: center !important;
              padding-bottom: 7px !important;
              margin: auto !important;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default AuthHeader;
