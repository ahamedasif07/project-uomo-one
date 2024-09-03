import React from "react";
import baner1 from "../../../public/images/uomo-home-page-1/banner_1.jpg";
import baner2 from "../../../public/images/uomo-home-page-1/banner_2.jpg";

const MenWomen = () => {
  return (
    <div className="md:container mx-auto px-3 py-10 md:flex gap-4">
      <div className="md:w-1/2">
        <div className="md:px-[60px] px-2 lg:px-0">
          <div
            className="relative mx-auto  md:mx-0  h-[400px] mb-5 md:mb-2 flex text-black flex-col bg-cover bg-center"
            style={{ backgroundImage: `url(${baner1})` }}
          >
            <div className="absolute bottom-0 pb-7 px-6">
              <h3 className="text-white">Starting At $19</h3>
              <h3 className="text-2xl py-2 text-white">
                Starting At $19 Women's T-Shirts
              </h3>
              <h4 className=" text-lg underline cursor-pointer relative text-white">
                SHOP NOW
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="md:px-[60px] px-2 lg:px-0">
          <div
            className="relative mx-auto  md:mx-0 h-[400px]  md:mb-2 flex text-black flex-col bg-cover bg-center"
            style={{ backgroundImage: `url(${baner2})` }}
          >
            <div className="absolute bottom-0 pb-7 px-6">
              <h3 className="">Starting At $19</h3>
              <h3 className="text-2xl py-2 ">
                Starting At $19 Women's T-Shirts
              </h3>
              <h4 className=" text-lg underline cursor-pointer relative ">
                SHOP NOW
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenWomen;
