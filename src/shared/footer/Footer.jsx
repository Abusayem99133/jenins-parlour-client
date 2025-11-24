import React from "react";
import { AiOutlineFacebook, AiOutlineYoutube } from "react-icons/ai";
import { CiLinkedin, CiLocationOn } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
import img1 from "../../assets/image/footer/facebook.png";
import img2 from "../../assets/image/footer/instagram.png";
import img3 from "../../assets/image/footer/linkedin.png";
import img4 from "../../assets/image/footer/youtube.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[#F63E7B] text-white p-16 ">
        <aside className="flex">
          <span>
            <CiLocationOn className="text-3xl" />
          </span>
          <p className="text-[16px] font-normal">
            H#000 (0th Floor), Road #00,
            <br />
            New DOHS, Mohakhali,Dhaka, Bangladesh
          </p>
        </aside>
        <nav>
          <h6 className="text-[20px] font-semibold mb-2">Company </h6>
          <a className="link link-hover text-[16px]">About</a>
          <a className="link link-hover text-[16px]">Project</a>
          <a className="link link-hover text-[16px]">Our Team</a>
          <a className="link link-hover text-[16px]">Terms Conditions</a>
          <a className="link link-hover text-[16px]">Submit Listing</a>
        </nav>
        <nav>
          <h6 className="text-[20px] font-semibold mb-2">Quick Links</h6>
          <a className="link link-hover">Quick Links</a>
          <a className="link link-hover text-[16px]">Rentals</a>
          <a className="link link-hover text-[16px]">Sales</a>
          <a className="link link-hover text-[16px]">Our blog</a>
        </nav>
        <nav>
          <h6 className="text-[20px] font-semibold ">About us</h6>
          <a className="link link-hover text-[16px] text-[#D8D8D8] my-2">
            Catch up on Jerin’s journey as we continue to <br /> redefine beauty
            and wellness for women <br /> in Bangladesh.
          </a>
          <span className="flex space-x-6">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="cursor-pointer"
            >
              <img src={img1} alt="" />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="cursor-pointer"
            >
              <img src={img2} alt="" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="cursor-pointer"
            >
              <img src={img3} alt="" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="-blank"
              className="cursor-pointer"
            >
              <img src={img4} alt="" />{" "}
            </a>
          </span>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
