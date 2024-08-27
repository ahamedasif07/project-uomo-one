import React from "react";
import collection_grid_1 from "../../../public/images/uomo-home-page-1/collection_grid_1.jpg";
const Catagory = () => {
  return (
    <div>
      <div className="container px-3 mx-auto py-10">
        <div
          className="relative md:w-[50%] md:h-[600px] h-[350px] flex text-black flex-col   bg-cover bg-center "
          style={{ backgroundImage: `url(${collection_grid_1})` }}
        >
          <div className="absolute bottom-0 pb-4 px-4">
            <h3 className=" ">Hot List</h3>
            <h3 className="text-xl">
              <span className="font-bold text-3xl">Women </span>Collection
            </h3>
            <h4 className="mt-2 text-lg underline cursor-pointer">SHOP NOW</h4>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Catagory;
