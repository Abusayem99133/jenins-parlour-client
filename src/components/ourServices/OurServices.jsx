import { useEffect, useState } from "react";

const OurServices = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch("/servicesData.json")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
        console.log("all data:", data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  console.log("data", serviceData);

  return (
    <div>
      <h1 className="text-[34px] font-bold text-center mt-16">
        Our Awesome <span className="text-[#F63E7B] ">Services</span>{" "}
      </h1>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
