import React, { useEffect, useState } from "react";

const BookingList = () => {
  const [bookingList, setBookingList] = useState([]);
  useEffect(() => {
    fetch("/bookingData.json")
      .then((res) => res.json())
      .then((data) => setBookingList(data));
  }, []);
  console.log(bookingList);
  return (
    <div className="bg-[#e9f0fc]">
      {/* <h1>booking list pages</h1> */}
      <div className="grid grid-cols-3 justify-between gap-4 p-4">
        {bookingList?.map((list) => (
          <div className="p-4  bg-white rounded-xl">
            <div>
              <div className="flex justify-between items-center w-full">
                <img
                  className="w-16 h-16 rounded-full"
                  src={list?.logo}
                  alt="logo"
                />
                <span
                  className={` text-[16px]  px-4 py-2 cursor-default font-medium
    ${
      list?.status === "Done"
        ? "bg-[#C6FFE0] text-[#009444]"
        : list?.status === "Pending"
        ? "bg-[#FFE3E3] text-[#FF4545]"
        : "bg-gray-200 text-gray-700"
    }
  `}
                >
                  {list?.status}
                </span>
              </div>
              <h2 className="text-[20px] font-semibold text-[#111430]">
                {list?.title}
              </h2>
              <p className="text-[16px] text-[#606268]">{list?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingList;
