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
      {/* section heading  */}
      <h1 className="text-[34px] font-bold text-center mt-16">
        Our Awesome <span className="text-[#F63E7B] ">Services</span>{" "}
      </h1>
      {/* card section  */}
      <div className="grid-cols-3">
        {serviceData?.map((service) => (
          <div className="card bg-base-100 w-96 shadow-sm gap-4">
            <div key={service?.id}>
              <img src={service?.img} alt="" />
              <div className="card-body">
                <h2 className="card-title">{service?.title}</h2>
                <span>{service?.price}</span>
                <p>{service?.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
