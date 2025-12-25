import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";


const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative -mt-50 md:-mt-70 lg:-mt-110">
        <div className="buttons absolute right-4 top-4 sm:right-6 sm:top-6 md:right-10 md:top-10 flex gap-3 sm:gap-4 md:gap-5 text-2xl sm:text-3xl text-gray-300 z-20">
           <button className="cursor-pointer" onClick={goToPrevious}><FaChevronLeft/></button>
           <button className="cursor-pointer" onClick={goToNext}><FaChevronRight/></button>
        </div>
      {/* CARDS  */}
      <div className="flex overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((d, i) => (
            <div
              style={{ background: `${d.color}` }}
              key={d.id}
              className={`h-auto sm:h-80 md:h-90 lg:h-130 xl:h-180 min-w-full rounded-2xl p-6 pt-14 md:pb-0 md:px-20 md:pt-20 flex flex-col justify-center md:flex-row`}
            >
              <div className="flex flex-col items-start justify-center w-full md:w-[50%]">
                <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-[26px] mb-3 sm:mb-4 md:mb-5 w-full leading-relaxed">{d.message}</h3>
                <p className="text-white font-light text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 lg:mb-14">{d.name}</p>
                <button className="text-gray-400 bg-white text-xs sm:text-sm md:text-base lg:text-base p-3 sm:p-4 md:p-5 lg:p-6 cursor-pointer rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                  <FaPlay />
                </button>
              </div>
              <div className="hidden md:block">
                <img className="w-full h-full " src={d.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4 sm:mt-6">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer transition-all ${
              index === currentIndex
                ? "w-8 bg-gray-600"
                : "w-2 bg-gray-400"
            } h-2 rounded-full`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
