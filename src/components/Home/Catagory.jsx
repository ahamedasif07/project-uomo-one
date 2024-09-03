import React from "react";
import collection_grid_1 from "../../../public/images/uomo-home-page-1/collection_grid_1.jpg";
import collection_grid_2 from "../../../public/images/uomo-home-page-1/collection_grid_2.jpg";
import collection_grid_3 from "../../../public/images/uomo-home-page-1/collection_grid_3.jpg";

const Catagory = () => (
  <div>
    <div className="md:container px-3  mx-auto py-10">
      <div className="flex lg:flex-row flex-col gap-8">
        <div className="lg:w-1/2">
          <div className="md:px-[60px] px-2 lg:px-0">
            <div
              className="relative mx-auto  md:mx-0 md:h-[600px] h-[300px] md:mb-2 flex text-black flex-col bg-cover bg-center"
              style={{ backgroundImage: `url(${collection_grid_1})` }}
            >
              <div className="absolute bottom-0 pb-7 px-6">
                <h3>Hot List</h3>
                <h3 className="text-xl">
                  <span className="font-bold text-3xl">Women </span>Collection
                </h3>
                <h4 className="mt-2 text-lg underline cursor-pointer relative">
                  SHOP NOW
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          {/* Upper content */}
          <div className="md:px-[60px] px-2 relative flex flex-col md:gap-3 gap-0   lg:px-0">
            <div
              className="h-[290px]  relative p-3 bg-cover  bg-center"
              style={{ backgroundImage: `url(${collection_grid_2})` }}
            >
              <div className="absolute bottom-0 pb-7 px-6 ">
                <h3>Hot List</h3>
                <h3 className="text-xl">
                  <span className="font-bold text-3xl">KID'S </span>Collection
                </h3>
                <h4 className="mt-5 text-lg underline cursor-pointer relative">
                  SHOP NOW
                </h4>
              </div>
            </div>
            {/* kids */}
            <div className="md:flex md:gap-3">
              {/* part 1 */}
              <div
                className="h-[290px] md:w-1/2 relative p-3 bg-cover mt-3 bg-center"
                style={{ backgroundImage: `url(${collection_grid_3})` }}
              >
                <div className="absolute bottom-0 pb-7 px-6 ">
                  <h3>Hot List</h3>
                  <h3 className="text-xl">
                    <span className="font-bold text-3xl">KID'S </span>Collection
                  </h3>
                  <h4 className="mt-5 text-lg underline cursor-pointer relative">
                    SHOP NOW
                  </h4>
                </div>
              </div>
              {/* part 2 */}
              <div className="h-[290px] md:w-1/2 relative p-3 bg-[#f5e6e0]  bg-cover mt-3 bg-center">
                <div className="absolute bottom-0 pb-7 px-6 ">
                  <h3 className="text-xl">
                    <span className="font-bold text-3xl">E-Gift </span>
                    Cards
                  </h3>
                  <h3 className="text-[8px] ">
                    Surprise someone with the gift they <br /> really want.
                  </h3>

                  <h4 className="mt-3 text-lg underline cursor-pointer relative">
                    SHOP NOW
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Catagory;
