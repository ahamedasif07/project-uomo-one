import uomoLogo from "../../public/images/uomo-home-page-1/logo.png";
import logosPng from "../../public/images/icons/social.png";
import logosTwenty from "../../public/images/icons/image 20.png";
const Footer = () => {
  return (
    <div className=" bg-[#e4e4e4] pt-20 pb-24 ">
      <footer className="container mx-auto">
        <div className="flex flex-col gap-6 mx-4 justify-between items-stretch md:flex-row">
          <div className="">
            <img src={uomoLogo} alt="" />
            <p className="pt-8 text-[14px]">
              1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
            </p>
            <p className="text-[14px] py-2">sale@uomo.com</p>
            <p className="text-[14px]">+1 246-345-0695</p>
            <div>
              <img className="pt-6" src={logosPng} alt="" />
            </div>
          </div>
          {/* middel part */}
          <div className="flex gap-24 md:gap-6 flex-wrap ">
            <div className="">
              <h3 className="font-semibold text-xl">Company</h3>
              <div className="footer-futures">
                <h2
                  className="text-[12px] py-3
             "
                >
                  About Us
                </h2>
                <p className="shop-border w-[0px]  duration-300 easy-in-out footer-border h-[2px] bg-black"></p>
              </div>

              <div className="footer-futures">
                <h2
                  className="text-[12px] py-3
             "
                >
                  Careers
                </h2>
                <p className="shop-border w-[0px]  duration-300 easy-in-out footer-border h-[2px] bg-black"></p>
              </div>

              <div className="footer-futures">
                <h2
                  className="text-[12px] py-3
             "
                >
                  Affiliates
                </h2>
                <p className="shop-border w-[0px]  duration-300 easy-in-out footer-border h-[2px] bg-black"></p>
              </div>

              <div className="footer-futures">
                <h2
                  className="text-[12px] py-3
             "
                >
                  Contact Us
                </h2>
                <p className="shop-border w-[0px]  duration-300 easy-in-out footer-border h-[2px] bg-black"></p>
              </div>
            </div>
            {/* help */}
            <div className="">
              <h3 className="font-semibold text-xl">Help</h3>
              <div className="footer-futures">
                <h2
                  className="text-[12px] py-3
             "
                >
                  Customer Service
                </h2>
                <p className="shop-border w-[0px]  duration-300 easy-in-out footer-border h-[2px] bg-black"></p>
              </div>

              <div className="footer-futures">
                <h2
                  className="text-[12px] py-3
             "
                >
                  My Account
                </h2>
                <p className="shop-border w-[0px]  duration-300 easy-in-out footer-border h-[2px] bg-black"></p>
              </div>

              <div className="footer-futures">
                <h2
                  className="text-[12px] py-3
             "
                >
                  Find a Store
                </h2>
                <p className="shop-border w-[0px]  duration-300 easy-in-out footer-border h-[2px] bg-black"></p>
              </div>
              <div className="footer-futures">
                <h2
                  className="text-[12px] py-3
             "
                >
                  Gift Card
                </h2>
                <p className="shop-border w-[0px]  duration-300 easy-in-out footer-border h-[2px] bg-black"></p>
              </div>

              <div className="footer-futures">
                <h2
                  className="text-[12px] py-3
             "
                >
                  Legal & Privacy
                </h2>
                <p className="shop-border w-[0px]  duration-300 easy-in-out footer-border h-[2px] bg-black"></p>
              </div>
            </div>
            {/* shop */}
            <div>
              <div className="">
                <h3 className="font-semibold text-xl">Shop</h3>
                <div className="footer-futures">
                  <h2
                    className="text-[12px] py-3
             "
                  >
                    New Arrivals
                  </h2>
                  <p className="shop-border w-[0px]  duration-300 easy-in-out footer-border h-[2px] bg-black"></p>
                </div>

                <div className="footer-futures">
                  <h2
                    className="text-[12px] py-3
             "
                  >
                    Accessories
                  </h2>
                  <p className="shop-border w-[0px]  duration-300 easy-in-out footer-border h-[2px] bg-black"></p>
                </div>

                <div className="footer-futures">
                  <h2
                    className="text-[12px] py-3
             "
                  >
                    Men
                  </h2>
                  <p className="shop-border w-[0px]  duration-300 easy-in-out footer-border h-[2px] bg-black"></p>
                </div>
                <div className="footer-futures">
                  <h2
                    className="text-[12px] py-3
             "
                  >
                    Women
                  </h2>
                  <p className="shop-border w-[0px]  duration-300 easy-in-out footer-border h-[2px] bg-black"></p>
                </div>

                <div className="footer-futures">
                  <h2
                    className="text-[12px] py-3
             "
                  >
                    Women
                  </h2>
                  <p className="shop-border w-[0px]  duration-300 easy-in-out footer-border h-[2px] bg-black"></p>
                </div>
              </div>
            </div>
          </div>
          {/* last part */}
          <div className="">
            <div className="">
              <h3 className="font-semibold text-xl uppercase">Subscribe</h3>
              <p className="pt-8 text-[14px]">
                Be the first to get the latest <br /> news about trends,
                promotions, and much more!
              </p>
              <p className="text-[14px] py-2">sale@uomo.com</p>
              <p className="text-[14px]">+1 246-345-0695</p>
              <input
                type="scarch"
                name=""
                id=""
                placeholder="scarch"
                className="px-4 py-3 mt-4"
              />
              <div>
                <img className="pt-6" src={logosTwenty} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
