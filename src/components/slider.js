import { Carousel } from "react-responsive-carousel";
import {
  slider_books,
  slider_fastfood,
  slider_groceries,
  slider_rawfoods
} from "../imports";
import style from '../styles/slider.module.css';

const HomepageSlider = () => {
  return (
      <Carousel className={style.carouselmain} infiniteLoop useKeyboardArrows showThumbs={false} autoPlay>
        <div>
          <img src={slider_books} />
          <p className={style.legend}>Awesome Books, get one now!</p>
        </div>
        <div>
          <img src={slider_fastfood} />
          <p className={style.legend}>  
            You need food right <strong>now </strong>? Order{" "}
            <strong>now</strong>
          </p>
        </div>
        <div>
          <img src={slider_groceries} />
          <p className={style.legend}>Order Groceries from nearby stores</p>
        </div>
        <div>
          <img src={slider_rawfoods} />
          <p className={style.legend}>Is it rawfoods? we got you 😉</p>
        </div>
      </Carousel>
  );
};

export default HomepageSlider;
