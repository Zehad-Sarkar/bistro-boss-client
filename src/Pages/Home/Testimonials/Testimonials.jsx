import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect } from "react";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-16">
      {/* section title */}
      <SectionTitle
        subHeading={"Whats our client say"}
        heading={"Testimonials"}
      />
      {/* testimonials */}
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center p-16 space-y-4">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft className="text-3xl"></FaQuoteLeft>
                <p>{review.details}</p>
                <h3 className="text-4xl font-bold">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
