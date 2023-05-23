import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      {/* section title */}
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>

      {/* slider section */}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mb-24 mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="-mt-16 text-4xl font-bold text-center text-white uppercase">
            Salad
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="-mt-16 text-4xl font-bold text-center text-white uppercase">
            Pizza
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="-mt-16 text-4xl font-bold text-center text-white uppercase">
            Soup
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="-mt-16 text-4xl font-bold text-center text-white uppercase">
            Desserts
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className="-mt-16 text-4xl font-bold text-center text-white uppercase">
            Salad
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
