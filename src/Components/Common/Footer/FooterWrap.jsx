import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FooterWrap = () => {
  return (
    <section className="footer w-full bg-gray-06">
      <div className="mx-2 flex flex-col lg:max-w-[80vw] lg:mx-auto gap-2 lg:py-5 py-10">
        <div className="upper grid grid-cols-2 lg:grid-cols-6 lg:py-10 pb-6 gap-6">
          <ul className="home text-gray-60">
            <li className="text-white pb-3">Home</li>
            <li className="cursor-pointer hover:underline">Categories</li>
            <li className="cursor-pointer hover:underline">Devices</li>
            <li className="cursor-pointer hover:underline">Pricing</li>
            <li className="cursor-pointer hover:underline">FAQ</li>
          </ul>
          <ul className="movies text-gray-60">
            <li className="text-white pb-3">Movies</li>
            <li className="cursor-pointer hover:underline">Gernes</li>
            <li className="cursor-pointer hover:underline">Trending</li>
            <li className="cursor-pointer hover:underline">New Release</li>
            <li className="cursor-pointer hover:underline">Popular</li>
          </ul>
          <ul className="shows text-gray-60">
            <li className="text-white pb-3">Shows</li>
            <li className="cursor-pointer hover:underline">Gernes</li>
            <li className="cursor-pointer hover:underline">Trending</li>
            <li className="cursor-pointer hover:underline">New Release</li>
            <li className="cursor-pointer hover:underline">Popular</li>
          </ul>
          <ul className="support text-gray-60">
            <li className="text-white pb-3">Support</li>
            <li className="cursor-pointer hover:underline">Contact Us</li>
          </ul>
          <ul className="subscription text-gray-60">
            <li className="text-white pb-3">Subscription</li>
            <li className="cursor-pointer hover:underline">Plans</li>
            <li className="cursor-pointer hover:underline">Features</li>
          </ul>
          <ul className="connetctWithUs">
            <li className="text-white pb-3">Connetct With Us</li>
            <ul className="text-white flex items-center justify-start gap-2">
              <li className="border border-gray-15 rounded-md flex items-center justify-center bg-gray-08 w-8 h-8 cursor-pointer">
                <FaFacebook />
              </li>
              <li className="border border-gray-15 rounded-md flex items-center justify-center bg-gray-08 w-8 h-8 cursor-pointer">
                <FaLinkedin />
              </li>
              <li className="border border-gray-15 rounded-md flex items-center justify-center bg-gray-08 w-8 h-8 cursor-pointer">
                <FaSquareXTwitter />
              </li>
            </ul>
          </ul>
        </div>
        <div className="lower">
          <span>
            <hr className="text-gray-15" />
          </span>
          <div className="pt-4 flex gap-2 md:flex-row md:justify-between flex-col text-gray-60">
            <div className="left">
              <p>@2023 streamvibe, All Rights Reserved</p>
            </div>
            <div className="right flex items-center justify-start gap-1">
              <p>Terms of Use</p>
              <span>|</span>
              <p>Privacy Policy</p>
              <span>|</span>
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterWrap;
