import React from "react";
import Container from "./Container";
import { FaArrowRightLong } from "react-icons/fa6";


const GetOn = () => {
  return (
    <div className="bg-[#26262b] text-white pb-50 md:pb-90 lg:pb-120">
      <Container className="border-b border-gray-400">
        <div className="flex justify-between py-20 sm:flex-row flex-col gap-5 sm:gap-0">
          <h2 className="text-[36px] font-semibold">What you get on Setapp.</h2>
          <p className="text-[18px]">
            With a single monthly subscription at $9.99, you get 240+ apps for{" "}
            <br />
            your Mac.
          </p>
        </div>

        {/* CARDS  */}
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="lg:col-span-2 bg-[#DF96AE] rounded-2xl px-8 sm:px-15 pt-15">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-5 sm:mb-0">
              <img className="h-20 w-20" src="/geton/c1-icon.png" alt="" />
              <div className="text-black">
                <h3 className="text-[28px] font-semibold">
                  Keep your Mac clean
                </h3>
                <p className="text-[18px]">
                  Remove junk, scan for malware, wipe email attachments
                </p>
              </div>
            </div>
            <img className="mx-auto" src="/geton/gn-card-1.png" alt="" />
          </div>

          <div className="bg-[#F4F0E4] rounded-2xl px-10 sm:px-20 py-10">
            <img
              src="/geton/card2.png"
              alt="card image"
              className="mx-auto mb-10"
            />

            <div className="text-black mx-auto">
              <img src="/geton/c2-icon.png" alt="" className="mb-5" />
              <h3 className="text-[26px] font-semibold">Write code</h3>
              <p className="text-[18px] font-light">
                Create applications in more than 25 languages
              </p>
            </div>
          </div>


          <div className="bg-[#384C75] rounded-2xl pt-10">
            

            <div className="text-white mx-auto mb-10 px-10">
              <img src="/geton/c3-icon.png" alt="" className="mb-5" />
              <h3 className="text-[26px] font-semibold">Join meetings in a click</h3>
              <p className="text-[18px] font-light">
                Quickly access links to your meetings from menu bar
              </p>
            </div>
            <img
              src="/geton/card3.png"
              alt="card image"
              className="mx-auto"
            />
          </div>
        </div>

        <a href="#" className="flex items-center gap-4 w-fit mx-auto my-15 text-[20px]"><FaArrowRightLong/> View All Superpowers</a>
        <div className="flex justify-between py-20 sm:flex-row flex-col gap-5 sm:gap-0">
          <h2 className="text-[36px] font-semibold">Your Setapp journey.</h2>
          <p className="text-[18px]">
            Type in your task into Setapp search and get instant app <br />
recommendations.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default GetOn;
