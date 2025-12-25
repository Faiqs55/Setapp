import React, { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3); 
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2); 
      } else {
        setCardsToShow(1); 
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [cardsToShow]);

  const maxIndex = Math.max(0, data.length - cardsToShow);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const totalSlides = maxIndex + 1;

  const getGapSize = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 768) return 40; 
      if (window.innerWidth >= 640) return 32; 
      return 24; 
    }
    return 40;
  };

  const [gapSize, setGapSize] = useState(getGapSize());

  useEffect(() => {
    const updateGapSize = () => {
      setGapSize(getGapSize());
    };
    window.addEventListener("resize", updateGapSize);
    return () => window.removeEventListener("resize", updateGapSize);
  }, []);

  const cardWidth = 380;
  const slideDistance = cardWidth + gapSize;

  return (
    <div className="relative mt-10">
      <div className="buttons flex justify-end gap-3 mb-10 sm:gap-4 md:gap-5 text-2xl sm:text-3xl text-gray-500 z-20">
        <button className="cursor-pointer" onClick={goToPrevious}>
          <FaChevronLeft />
        </button>
        <button className="cursor-pointer" onClick={goToNext}>
          <FaChevronRight />
        </button>
      </div>

      {/* CARDS  */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 sm:gap-8 md:gap-10 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * slideDistance}px)`,
          }}
        >
          {data.map((d, i) => (
            <div
              key={d.id}
              className="bg-[#F5F5F5] p-2 rounded-xl flex-shrink-0"
              style={{ width: '380px' }}
            >
              <div style={{ background: d.bg }} className="rounded-xl px-5 pt-10 pb-14">
                <p className="text-white text-[24px] xl:text-[26px] leading-9">
                  {d.msg}
                </p>
              </div>

              <div className="flex justify-between items-end px-5 py-8">
                <div>
                  <h4 className="text-[18px] font-semibold">{d.name}</h4>
                  <span className="text-[14px] text-[#9F9F9F]">{d.account}</span>
                </div>

                <img className="h-6 w-6" src={d.platform} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PAGINATION DOTS */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer transition-all ${
              index === currentIndex
                ? "w-8 bg-gray-600"
                : "w-2 bg-gray-400"
            } h-2 rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
