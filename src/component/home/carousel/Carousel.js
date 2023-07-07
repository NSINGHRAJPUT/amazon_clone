import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import carousel1 from "../../../images/carousel_1.jpg";
import carousel2 from "../../../images/carousel_2.jpg";
// import carousel3 from "../../../images/carousel_3.jpg";
import carousel4 from "../../../images/carousel_4.jpg";
import carousel5 from "../../../images/carousel_5.jpg";
import carouselvideo from "../../../images/carousel_vid.mp4";

const Carousel = () => {
  return (
    <div className="h-[240px] flex bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
        }}
        className="h-[220px]"
      >
        <SwiperSlide>
          <img src={carousel1} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel2} alt=""></img>
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video controls muted="muted">
            <source src={carouselvideo} type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel4} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel5} alt=""></img>
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900"></div>
    </div>
  );
};

export default Carousel;
