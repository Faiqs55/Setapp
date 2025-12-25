import React from "react";
import Container from "./Container";
import Slider from "./Slider";

const Testimonials = () => {

    const data = [
        {
            id: 1,
            msg: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
            name: "Arash Pourhabibi",
            platform: "/fb2.png",
            account: "@ArashPourhabibi",
            bg: "#71719A",
        },
        {
            id: 2,
            msg: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
            name: "Arash Pourhabibi",
            platform: "/fb2.png",
            account: "@ArashPourhabibi",
            bg: "#D9AE89",
        },
        {
            id: 3,
            msg: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
            name: "Arash Pourhabibi",
            platform: "/fb2.png",
            account: "@ArashPourhabibi",
            bg: "#765070",
        },
        {
            id: 4,
            msg: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
            name: "Arash Pourhabibi",
            platform: "/fb2.png",
            account: "@ArashPourhabibi",
            bg: "#384C75",
        },
    ]

  return (
    <div className="border-b border-gray-500 mb-70 md:mb-100 pb-16">
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-0">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold">Setapp in your words.</h2>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 lg:gap-20 items-start sm:items-center">
            <p className="font-light text-base sm:text-[18px]">
              What you say about how Setapp <br className="hidden sm:block" />
              powers you up.
            </p>

            <div className="flex gap-3">
                <a href="#"><img src="/fb2.png" alt="" /></a>
                <a href="#"><img src="/t2.png" alt="" /></a>
                <a href="#"><img src="/i2.png" alt="" /></a>
                <a href="#"><img src="/y2.png" alt="" /></a>
            </div>
          </div>
        </div>

        {/* TESTIMONIALS  */}
        <Slider data={data} />
      </Container>
    </div>
  );
};

export default Testimonials;
