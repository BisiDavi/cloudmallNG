import { Carousel } from 'react-responsive-carousel';
import {
  slider_books,
  slider_fastfood,
  slider_groceries,
  slider_rawfoods
} from '../imports';
import style from '../styles/slider.module.css';

const HomepageSlider = () => {
  return (
    <Carousel
      className={style.carouselmain}
      infiniteLoop
      showThumbs={false}
      autoPlay
      showArrows={false}
      showStatus={false}
    >
        
      <div className={style.carouselslide} >
        <img  
          src={slider_books} 
        />
      </div>
        
      <div className={style.carouselslide} >
        <img 
          src={slider_fastfood} 
        />
      </div>
        
      <div className={style.carouselslide} >
        <img 
          src={slider_groceries} 
        />
      </div>
        
      <div className={style.carouselslide} >
        <img 
          src={slider_rawfoods} 
        />
      </div>
    </Carousel>
  );
};

export default HomepageSlider;
