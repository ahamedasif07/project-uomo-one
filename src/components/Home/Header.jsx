import React, { useState, useEffect } from "react";
import sliderOne from "../../../public/images/uomo-home-page-1/slideshow-character1.png";
import sliderTwo from "../../../public/images/uomo-home-page-1/slideshow-character2.png";

const slides = [
  {
    text: "SUMMER SALE STYLISH WOMENS",
    subText: "NEW TREND",
    buttonText: "DISCOVER MORE",
    image: sliderOne,
    textStyle: "text-black font-bold",
    subTextStyle: "text-red-500",
    buttonStyle: "text-sm font-medium underline",
    layout: "justify-start",
  },
  {
    text: "HELLO NEW SEASON",
    subText: "NEW TREND",
    buttonText: "DISCOVER MORE",
    image: sliderTwo,
    textStyle: "text-black font-bold",
    subTextStyle: "text-red-500",
    buttonStyle: "text-sm font-medium underline",
    layout: "justify-start",
  },
];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="">
      <div className="relative mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-[#FFF6F2]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            } flex md:flex-row items-center ${slide.layout} bg-[#FFF6F2]`}
          >
            <div
              className={`w-full md:w-1/2 p-4 md:pl-12 text-left transition-transform duration-700 ease-in-out ${
                index === currentSlide ? "translate-y-0" : "translate-y-5"
              }`}
            >
              <h3 className={`mb-2 ${slide.subTextStyle} text-sm md:text-base`}>
                {slide.subText}
              </h3>
              <h2
                className={`text-xl font-semibold  sm:text-2xl md:text-3xl lg:text-5xl ${slide.textStyle}`}
              >
                {slide.text?.slice(0, 20)}
                <span className="font-extrabold text-black">
                  {slide.text?.slice(20, 40)}
                </span>
              </h2>
              <button className={`mt-2 ${slide.buttonStyle}`}>
                {slide.buttonText}
              </button>
            </div>
            <div className="w-full md:w-1/2 h-full flex justify-center items-center transition-transform duration-700 ease-in-out">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className={`h-full object-contain transition-transform duration-700 ease-in-out ${
                  index === currentSlide ? "translate-y-0" : "translate-y-5"
                }`}
              />
            </div>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
