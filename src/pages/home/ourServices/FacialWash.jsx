import facialWash from "../../../assets/image/services-image/face-treatment.jpg";
const FacialWash = () => {
  return (
    <div>
      <div className="flex justify-between items-center pt-20 px-28 gap-4 w-full">
        <div className="w-1/2 ml-16">
          <img src={facialWash} alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="text-[34px] font-bold mb-2">
            Let us handle your screen{" "}
            <span className="text-[#F63E7B]">Professionally.</span>
          </h1>
          <p className="text-[16px] text-[##666666] mb-2">
            A beauty salon or beauty parlor (beauty parlour) (or sometimes
            beauty shop) is an establishment dealing with cosmetic treatments
            for men and women.
          </p>
          {/* <button className="btn bg-[#F63E7B] text-white text-[16px] mt-5">
               Get an Appointments
             </button> */}
        </div>
      </div>
    </div>
  );
};

export default FacialWash;
