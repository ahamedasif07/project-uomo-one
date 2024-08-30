import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const TrandyProducts = () => {
  return (
    <div className="container mx-auto pt-[40px] ">
      <h2 className="text-center text-3xl font-semibold">
        Our Trendy <span className="font-extrabold">Products</span>
      </h2>
      <div>
        <ul className="flex flex-wrap justify-center gap-5 py-7">
          <NavLink
            className="font-semibold text-[14px] text-gray-700 relative pb-1 group"
            to="/"
          >
            ALL
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink
            className="font-semibold text-[14px] text-gray-700 relative pb-1 group"
            to="#"
          >
            NEW ARRIVALS
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink
            className="font-semibold text-[14px] text-gray-700 relative pb-1 group"
            to="#"
          >
            BEST SELLER
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink
            className="font-semibold text-[14px] text-gray-700 relative pb-1 group"
            to="#"
          >
            TOP RATED
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </ul>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default TrandyProducts;
