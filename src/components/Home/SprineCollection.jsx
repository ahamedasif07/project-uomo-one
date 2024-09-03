import springImg from "../../../public/images/uomo-home-page-1/deal_timer_bg.jpg";
const SprineCollection = () => {
  return (
    <div className="md:container  mx-auto">
      <div
        className="my-6 border-4 md:object-fill flex flex-col justify-center  px-8 mx-5"
        style={{
          backgroundImage: `url(${springImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
        }}
      >
        <div className="flex  items-center gap-3">
          <p className="w-[80px] h-[3px] bg-red-600"></p>
          <h2 className="uppercase text-[14px] text-red-600">
            Deal of the week
          </h2>
        </div>
        <h2 className="uppercase font-semibold py-6 lg:text-6xl text-3xl ">
          <span className="font-extrabold ">Spring</span> Collection
        </h2>

        <div className="btn-shop">
          <button className="text-[13px] font-semibold  text-gray-700">
            SHOP NOW
          </button>
          <p className="shop-border w-[40px]  duration-300 footer-futures-p  easy-in-out h-[3px] bg-black"></p>
        </div>
      </div>
    </div>
  );
};

export default SprineCollection;
