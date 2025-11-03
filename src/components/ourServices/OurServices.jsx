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
    <div className="bg-[#ffffff] shadow-[#000000]/10">
      {/* section heading  */}
      <h1 className="text-[34px] font-bold text-center mt-16">
        Our Awesome <span className="text-[#F63E7B] ">Services</span>{" "}
      </h1>
      {/* card section  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
        {serviceData?.slice(0, 3)?.map((service) => (
          <div
            key={service?.id}
            className="card bg-base-100 w-full max-w-sm mx-auto shadow "
          >
            <figure className="">
              <img
                src={service?.img}
                alt="logo"
                className="rounded-xl  h-auto object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{service?.title}</h2>
              <span className="font-semibold">{service?.price}</span>
              <p>{service?.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1 className="btn">Explore more</h1>
      </div>
    </div>
  );
};

export default OurServices;
