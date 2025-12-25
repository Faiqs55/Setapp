import React from "react";
import Container from "./Container";

const Hero = () => {
  return (
    <div className="bg-[#26262B] w-full">
      <Container className="pt-16 pb-26 relative border-b-2 border-gray-500 flex flex-col items-center justify-center text-white">
        {/* IMAGES  */}
        <div className="z-0 lg:block hidden">
          {/* LEFT  */}
          <img
            className="absolute left-15 top-30 z-1"
            src="/hero/pics.svg.png"
            alt="HERO STYLE IMAGES"
          />
          <img
            className="absolute left-15 top-62 z-1 animate-spin"
            src="/hero/macpaw.svg.png"
            alt="HERO STYLE IMAGES"
          />
          <img
            className="absolute left-40 top-56 z-1"
            src="/hero/pdf.svg.png"
            alt="HERO STYLE IMAGES"
          />
          <img
            className="absolute left-15 top-97 z-1"
            src="/hero/teamwork.svg.png"
            alt="HERO STYLE IMAGES"
          />
          <img
            className="absolute left-15 top-120 z-1"
            src="/hero/secure.svg.png"
            alt="HERO STYLE IMAGES"
          />

          {/* RIGHT  */}
          <img
            className="absolute right-15 top-30 z-1"
            src="/hero/wifi.svg.png"
            alt="HERO STYLE IMAGES"
          />
          <img
            className="absolute right-44 top-45 z-1"
            src="/hero/plan.svg.png"
            alt="HERO STYLE IMAGES"
          />
          <img
            className="absolute right-15 top-78 z-1"
            src="/hero/converter.svg.png"
            alt="HERO STYLE IMAGES"
          />
          <img
            className="absolute right-30 top-102 z-0"
            src="/hero/manage.svg.png"
            alt="HERO STYLE IMAGES"
          />
          <img
            className="absolute right-33 top-128 z-1"
            src="/hero/code.svg.png"
            alt="HERO STYLE IMAGES"
          />
        </div>

        <div className="flex flex-col items-center z-1">
          <img
            className="h-30 sm:h-40 w-30 sm:w-40 mt-10"
            src="/hero-logo.png"
            alt="Hero Page logo"
          />
          <h1 className="text-[40px] sm:text-[64px] font-bold leading-12 sm:leading-16.75 text-center">
            Dozens of apps. <br />
            One subscription. <br />
            $9.99 <br />
          </h1>

          {/* BUTTONS  */}
          <div className="flex gap-4 items-center mt-10">
            <a className="bg-white rounded-sm px-4 sm:px-8 py-3 text-gray-700" href="#">
              Try free for 7 days
            </a>
            <a className="bg-white rounded-sm py-2 px-3" href="#">
              <img className="w-8" src="/apple.svg.png" alt="" />
            </a>
            <a className="bg-white rounded-sm py-2 px-3" href="#">
              <img className="w-8" src="/google.svg.png" alt="" />
            </a>
          </div>

          <p className="text-center sm:text-[18px] mt-10">
            Power up your workflow with Setapp, a <br />
            smart way to get apps.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
