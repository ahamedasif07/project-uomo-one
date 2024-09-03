import navLogo from "../public/images/uomo-home-page-1/logo.png";
import icon1 from "../public/images/icons/001-loupe.png";
import icon2 from "../public/images/icons/002-user.png";
import icon3 from "../public/images/icons/004-heart.png";
import icon4 from "../public/images/icons/003-shopping-bag.png";
import icon5 from "../public/images/icons/nav_icon.png"; // Hamburger menu icon
import { useState, useEffect } from "react";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenu = () => {
    if (window.innerWidth < 768) {
      setMenu(!menu);
      console.log("Menu toggled");
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <div className="d">
        <h1 className="text-center bg-white py-1 w-[100%] text-[14px]">
          Lorem ipsum dolor sit
        </h1>
      </div> */}
      <nav
        className={`md:fixed top-0 left-0 w-full z-50 transition-all  duration-300 ${
          isScrolled
            ? "bg-gray-100 shadow-lg py-3 fixed"
            : " bg-transparent py-4"
        }`}
      >
        <div className="flex justify-around items-center">
          <div className="flex flex-col md:flex-row gap-x-5">
            <figure>
              <img src={navLogo} alt="Logo" />
            </figure>

            {/* Menu items with transition */}
            <ul
              className={`right-0 absolute flex md:gap-4 z-10 md:px-3 md:relative  md:flex transition-all duration-300 ease-in-out transform ${
                menu
                  ? "opacity-100 translate-y-0 flex-col w-[100%] sm:w-[40%] px-10 bg-gray-100 top-[60px] gap-y-5  py-2 items-center"
                  : "opacity-0 -translate-y-5 flex-row"
              } md:opacity-100 md:translate-y-0`}
            >
              <li className="text-[14px] cursor-pointer font-semibold text-gray-600">
                HOME
              </li>
              <li className="text-[14px] cursor-pointer font-semibold text-gray-600">
                SHOP
              </li>
              <li className="text-[14px] cursor-pointer font-semibold text-gray-600">
                COLLECTION
              </li>
              <li className="text-[14px] cursor-pointer font-semibold text-gray-600">
                JOURNAL
              </li>
              <li className="text-[14px] cursor-pointer font-semibold text-gray-600">
                LOOKBOOK
              </li>
            </ul>
          </div>
          <div className="flex gap-2 md:gap-4">
            <img className="w-[20px] h-[20px]" src={icon1} alt="" />
            <img className="w-[20px] h-[20px]" src={icon2} alt="" />
            <img className="w-[20px] h-[20px]" src={icon3} alt="" />
            <img className="w-[20px] h-[20px]" src={icon4} alt="" />
            <img
              onClick={handleMenu}
              className="w-[20px] h-[20px]"
              src={icon5}
              alt="Menu"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
