import facialWash from "../../../assets/image/services-image/face-treatment.jpg";
const FacialWash = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-20 px-28  w-full  gap-16">
        <div className="w-1/2 ">
          <img src={facialWash} alt="" />
        </div>
        <div className="w-1/2 ">
          <h1 className="text-[34px] font-bold mb-2">
            Let us handle your screen{" "}
            <span className="text-[#F63E7B]">Professionally.</span>
          </h1>
          <p className="text-[16px] text-[##666666] mb-2">
            A beauty salon or beauty parlor (beauty parlour) (or sometimes
            beauty shop) is an establishment dealing with cosmetic treatments
            for men and women.
          </p>
          <div className="flex mt-10">
            <div>
              <h2 className="font-bold text-[#F63E7B]  text-[42px]">500+</h2>
              <p className="text-[16px] mr-10">Happy Customer</p>
            </div>
            <div>
              <h2 className="font-bold text-[#F63E7B]  text-[42px]">16+</h2>
              <p className="text-[16px]">Total Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacialWash;
