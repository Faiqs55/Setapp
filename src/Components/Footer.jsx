import React from "react";
import Container from "./Container";
import { FaChevronRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#2B2D32] text-white border-t border-gray-500 pt-10 pb-5">
      <Container className="">
        {/* TOP  */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0">
          {/* LEFT  */}
          <div className="w-full lg:w-[30%]">
            <div className="flex gap-2 items-center mb-8 lg:mb-12">
              <img className="h-6 sm:h-7 md:h-8" src="/logo.png" alt="SETAPP LOGO" />
              <h4 className="font-semibold text-lg sm:text-[20px]">SETAPP</h4>
            </div>
            <div>
              <p className="flex flex-wrap gap-2 items-center mb-5 text-sm sm:text-base">
                Updates from our team, written with love{" "}
                <img src="/SVG.png" alt="Heart" />
              </p>

              {/* NEWSLETTER  */}
              <div className="bg-[#404547] flex items-center rounded-md overflow-hidden">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="outline-none flex-1 h-full px-3 sm:px-4 py-3 sm:py-4 bg-transparent text-sm sm:text-base"
                />
                <button className="bg-white px-3 sm:px-4 py-3 sm:py-4 cursor-pointer text-black">
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT  */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 w-full lg:w-auto">
            <ul className="w-full sm:w-[33%] flex flex-col gap-1">
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  All Apps
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Setapp for Teams
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Podcast
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Download
                </a>
              </li>
            </ul>
            <ul className="w-full sm:w-[33%] flex flex-col gap-1">
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Education Discount
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Family Plan
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  For Developers
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Gift Cards
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Redeem Card or Code
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Setapp Reviews
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Affiliate Program
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Mac Developer Survey 2023
                </a>
              </li>
            </ul>
            <ul className="w-full sm:w-[33%] flex flex-col gap-1">
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Getting started with Setapp
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Remote access to other Mac
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Fix macOS Ventura
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Problems
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Best productivity apps
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Best YouTube downloaders
                </a>
              </li>
              <li>
                <a
                  className="py-0.5 px-2 rounded-sm duration-200 text-sm sm:text-[16px] block hover:bg-[#373a3f]"
                  href="#"
                >
                  Uninstall apps
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* MIDDLE  */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0 mt-10 mb-10">
          <div className="text-[10px] sm:text-[11px]">
            <span className="px-2 py-1 bg-[#969799] font-semibold">DMCA</span>
            <span className="px-2 py-1 bg-[#404547] font-semibold">
              PROTECTED
            </span>
          </div>

          <div className="flex gap-1.5 items-center">
            <img className="h-4 sm:h-5" src="/flag.png" alt="flag" />
            <select name="lang" id="lang" className="min-w-20 text-sm sm:text-base bg-transparent text-white border border-gray-500 rounded px-2 py-1">
              <option value="eng">English</option>
            </select>
          </div>
        </div>

        {/* BOTTOM  */}
        <div className="border-t border-gray-400">
          <div className="mt-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
            <p className="text-[10px] sm:text-[12px] leading-relaxed">
              © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork,
              P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
            </p>

            <div className="flex gap-2.5">
              <a href="#">
                <img className="h-5 sm:h-6 w-auto" src="/fb.png" alt="" />
              </a>
              <a href="#">
                <img className="h-5 sm:h-6 w-auto" src="/t.png" alt="" />
              </a>
              <a href="#">
                <img className="h-5 sm:h-6 w-auto" src="/i.png" alt="" />
              </a>
              <a href="#">
                <img className="h-5 sm:h-6 w-auto" src="/y.png" alt="" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            <a href="#" className="text-[10px] sm:text-[12px] text-gray-600">Terms of Use</a>
            <a href="#" className="text-[10px] sm:text-[12px] text-gray-600">Privacy Policy</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
