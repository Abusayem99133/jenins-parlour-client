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
    <div>
      <h1>booking list pages</h1>
      <div className="grid grid-cols-3 justify-between gap-4 p-4">
        {bookingList?.map((list) => (
          <div className="p-4 border-2">
            <div>
              <div className="flex justify-between items-center w-full">
                <img
                  className="w-16 h-16 rounded-full"
                  src={list?.logo}
                  alt="logo"
                />
                <span
                  className={`btn text-[16px]  px-3 py-1 font-medium
    ${
      list?.status === "done"
        ? "bg-[#C6FFE0] text-[#009444]" // Done → green
        : list?.status === "pending"
        ? "bg-[#FFE3E3] text-[#FF4545]" // Pending → red
        : "bg-gray-200 text-gray-700" // Default / other status
    }
  `}
                >
                  {list?.status}
                </span>
              </div>
              <h2>{list?.title}</h2>
              <p>{list?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingList;
