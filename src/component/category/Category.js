import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../images/category_0.jpg";
import img2 from "../../images/category_1.jpg";
import img3 from "../../images/category_2.jpg";
import img4 from "../../images/category_3.jpg";
import img5 from "../../images/category_4.jpg";
import img6 from "../../images/category_5.jpg";

const Category = () => {
  return (
    <div className="bg-gray m-3">
      <div className="text-2xl font-semibold p-3">Shops by Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <img src={img1} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt=""></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
