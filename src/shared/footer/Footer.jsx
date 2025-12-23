import React from "react";
import { CiLocationOn } from "react-icons/ci";
import img1 from "../../assets/image/footer/facebook.png";
import img2 from "../../assets/image/footer/instagram.png";
import img3 from "../../assets/image/footer/linkedin.png";
import img4 from "../../assets/image/footer/youtube.png";

const Footer = () => {
  return (
    <div>
      <footer
        className="
          footer 
          sm:footer-horizontal 
          bg-[#F63E7B] 
          text-white 
          p-6 sm:p-12 md:p-16 lg:p-24
          gap-10 sm:gap-6 md:gap-10
        "
      >
        {/* Location Section */}
        <aside className="flex items-start space-x-3">
          <CiLocationOn className="text-3xl mt-1" />
          <p className="text-[16px] leading-relaxed">
            H#000 (0th Floor), Road #00,
            <br />
            New DOHS, Mohakhali, Dhaka, Bangladesh
          </p>
        </aside>

        {/* Company Section */}
        <nav>
          <h6 className="text-[20px] font-semibold mb-3">Company</h6>
          <a className="link link-hover text-[16px]">About</a>
          <a className="link link-hover text-[16px]">Project</a>
          <a className="link link-hover text-[16px]">Our Team</a>
          <a className="link link-hover text-[16px]">Terms Conditions</a>
          <a className="link link-hover text-[16px]">Submit Listing</a>
        </nav>

        {/* Quick Links */}
        <nav>
          <h6 className="text-[20px] font-semibold mb-3">Quick Links</h6>
          <a className="link link-hover text-[16px]">Quick Links</a>
          <a className="link link-hover text-[16px]">Rentals</a>
          <a className="link link-hover text-[16px]">Sales</a>
          <a className="link link-hover text-[16px]">Our Blog</a>
        </nav>

        {/* About Us */}
        <nav>
          <h6 className="text-[20px] font-semibold mb-3">About Us</h6>
          <p className="text-[16px] text-[#E5E5E5] leading-relaxed mb-4">
            Catch up on Jerin’s journey as we continue to redefine beauty and
            wellness for women in Bangladesh.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 items-center">
            <a href="https://www.facebook.com/" target="_blank">
              <img src={img1} alt="Facebook" />
            </a>

            <a href="https://www.instagram.com/" target="_blank">
              <img src={img2} alt="Instagram" />
            </a>

            <a href="https://www.linkedin.com/" target="_blank">
              <img src={img3} alt="LinkedIn" />
            </a>

            <a href="https://www.youtube.com/" target="_blank">
              <img src={img4} alt="YouTube" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
