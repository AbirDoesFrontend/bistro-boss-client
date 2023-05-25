import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import sliderImg1 from "../../../assets/home/slide1.jpg";
import sliderImg2 from "../../../assets/home/slide2.jpg";
import sliderImg3 from "../../../assets/home/slide3.jpg";
import sliderImg4 from "../../../assets/home/slide4.jpg";
import sliderImg5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"Order Online"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-20 mb-20"
      >
        <SwiperSlide>
          <img src={sliderImg1} alt="" />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImg2} alt="" />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            Pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImg3} alt="" />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImg4} alt="" />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            Deserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImg5} alt="" />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
