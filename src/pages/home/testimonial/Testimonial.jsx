// Import Swiper styles
import { useEffect, useState } from "react";
import "swiper/css";
import { Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    fetch("./testimonial.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonial(data);
        console.log("Loaded data", data);
      });
  }, []);
  console.log(testimonial);
  return (
    <div>
      <h1 className="text-[34px] items-center justify-center mx-auto flex font-bold text-[#1F1632] my-12">
        Testimonials
      </h1>
      {/* <div>
        <div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h3>name</h3>
              <span>ceo,</span>{" "}
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              nemo earum deserunt, numquam id officia dignissimos maiores quam
              neque nam similique deleniti ducimus natus quas, saepe possimus
              voluptatum? Harum, praesentium.
            </p>
            <span>star</span>
          </div>
        </div>
        <div></div>
        <div></div>
      </div> */}
      <div className="p-4">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonial?.map((reviews) => (
            <SwiperSlide>
              <div key={reviews?.id} className="border p-8 cursor-pointer h-52">
                <div className="flex ">
                  <div>
                    <img
                      className="w-[64px] h-[64px] rounded-full mr-5"
                      src={reviews?.thumbnail}
                      alt={reviews?.name}
                    />
                  </div>
                  <div>
                    <h2 className="text-[20px] font-semibold text-[#000000]">
                      {reviews?.name}
                    </h2>
                    <h4 className="text-[16px] font-medium text-[#000000]">
                      {reviews?.subtitle}
                    </h4>
                  </div>
                </div>
                <p className="text-[16px] font-normal text-[#707070] my-4">
                  {reviews?.description}
                </p>
                <span>{reviews?.review}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
