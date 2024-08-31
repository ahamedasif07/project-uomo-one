import React from "react";
import sheade from "../../../public/images/icons/shield.png";
import headphone from "../../../public/images/icons/headphone.png";
import delebary from "../../../public/images/icons/Vector.png";

const Futures = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row justify-around">
        <div className="flex flex-col py-4 justify-center items-center">
          <img className="w-[50px]" src={delebary} alt="" />
          <h2 className="text-[20px] font-semibold uppercase mt-4 mb-1">
            {" "}
            Fast And Free Delivery
          </h2>
          <h3 className="text-[14px] text-gray-600">
            Free delivery for all orders over $140
          </h3>
        </div>
        <div className="flex flex-col py-4 justify-center items-center">
          <img className="w-[50px]" src={headphone} alt="" />
          <h2 className="text-[20px] font-semibold uppercase mt-4 mb-1">
            {" "}
            24/7 Customer Support
          </h2>
          <h3 className="text-[14px] text-gray-600">
            Friendly 24/7 customer support
          </h3>
        </div>
        <div className="flex flex-col py-4 justify-center items-center">
          <img className="w-[50px]" src={sheade} alt="" />
          <h2 className="text-[20px] font-semibold uppercase mt-4 mb-1">
            {" "}
            Money Back Guarantee
          </h2>
          <h3 className="text-[14px] text-gray-600">
            We return money within 30 days
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Futures;
