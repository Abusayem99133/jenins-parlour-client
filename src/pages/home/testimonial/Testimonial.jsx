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
      <h1>Testimonial work on going </h1>
      <div>
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
      </div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {testimonial?.map((reviews) => (
          <SwiperSlide>
            <div key={reviews?.id}>
              <div>
                <div>
                  <img src={reviews?.img} alt="" />
                </div>
                <div>
                  <h2>{reviews?.title}</h2>
                  <h4>{reviews?.subtitle}</h4>
                </div>
                <p>{reviews?.description}</p>
                <span>{reviews?.review}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
