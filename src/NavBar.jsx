import navLogo from "../public/images/uomo-home-page-1/logo.png";
import icon1 from "../public/images/icons/001-loupe.png";
import icon2 from "../public/images/icons/002-user.png";
import icon3 from "../public/images/icons/004-heart.png";
import icon4 from "../public/images/icons/003-shopping-bag.png";
import icon5 from "../public/images/icons/nav_icon.png"; // Hamburger menu icon
import { useState } from "react";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const handleManue = () => {
    if (window.innerWidth < 768) {
      setMenu(!menu);
      console.log("Menu toggled");
    }
  };
  console.log(menu);
  return (
    <nav>
      <div className="flex  py-4 justify-around">
        <div className="flex flex-col md:flex-row gap-2">
          <figure>
            <img src={navLogo} alt="" />
          </figure>

          {/* Menu items with transition */}
          <ul
            className={`absolute top-14 md:top-0 md:relative md:flex transition-all duration-300 ease-in-out transform ${
              menu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            } md:opacity-100 md:translate-y-0`}
          >
            <li>HOME</li>
            <li>HOME</li>
            <li>HOME</li>
            <li>HOME</li>
          </ul>
        </div>
        <div className="flex gap-4">
          <img className="w-[20px] h-[20px]" src={icon1} alt="" />
          <img className="w-[20px] h-[20px]" src={icon2} alt="" />
          <img className="w-[20px] h-[20px]" src={icon3} alt="" />
          <img className="w-[20px] h-[20px]" src={icon4} alt="" />
          <img
            onClick={handleManue}
            className="w-[20px] h-[20px]"
            src={icon5}
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
