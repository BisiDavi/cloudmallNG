import { Carousel } from "react-responsive-carousel";
import Head from "next/head";
import {
  slider_books,
  slider_fastfood,
  slider_groceries,
  slider_rawfoods
} from "../imports";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const HomepageSlider = () => {
  return (
    
      <Carousel infiniteLoop useKeyboardArrows showThumbs={false} autoPlay>
        <div>
          <img src={slider_books} />
          <p className="legend">Awesome Books, get one now!</p>
        </div>
        <div>
          <img src={slider_fastfood} />
          <p className="legend">
            You need food right <strong>now </strong>? Order{" "}
            <strong>now</strong>
          </p>
        </div>
        <div>
          <img src={slider_groceries} />
          <p className="legend">Order Groceries from nearby stores</p>
        </div>
        <div>
          <img src={slider_rawfoods} />
          <p className="legend">Is it rawfoods? we got you 😉</p>
        </div>
      </Carousel>
  );
};

export default HomepageSlider;
