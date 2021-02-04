import { useRouter } from 'next/router';
import { arrowLeft } from '../imports';
import Head from 'next/head';

const Pageheader = ({ title }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>🛒 CloudMallNG - {title}</title>
      </Head>
      <div className="authHeader">
        <div className="d-flex authheader">
          <div onClick={() => router.back()} className="arrow">
            <img src={arrowLeft} alt="left arrow" />
          </div>
          <h5 className="text-center authtext font-weight-bold">{title}</h5>
        </div>
        <style jsx>
          {`
            .authHeader {
              width: 100%;
              position: absolute;
              top: 0px;
              left: 0px;
              z-index: 1000;
            }
            .authheader {
              display: flex !important;
              background-color: #ffce85;
              height: 50px;
              align-items: center;
            }
            .arrow {
              width: 50px;
              position: absolute;
              margin-left: 20px !important;
            }
            .authtext {
              margin: auto !important;
              font-size: 18px;
              font-family: 'Montserrat', sans-serif;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Pageheader;
