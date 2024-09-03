import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";

const All = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(8);
  const [isHover, setIshover] = useState(null);
  const [loveColour, setLoveColour] = useState({}); // Store love status by product ID

  useEffect(() => {
    const fetching = async () => {
      const res = await fetch("/data.json"); // Adjusted path to fetch data correctly
      const data = await res.json();
      setAllProducts(data);
    };
    fetching();
  }, []);

  const handleShowAll = () => {
    setShowProducts(allProducts.length);
  };

  const handleLoveColour = (id) => {
    setLoveColour((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the love status for the specific product
    }));
  };

  return (
    <div>
      <div className="md:container md:px-5 mx-auto grid lg:grid-cols-4 gap-5 grid-cols-2 md:grid-cols-3">
        {allProducts.slice(0, showProducts).map((product) => (
          <div key={product.id}>
            <div
              className=" relative group" // 'group' class here card-body
              onMouseEnter={() => setIshover(product.id)}
              onMouseLeave={() => setIshover(null)}
            >
              <div className="flex justify-center relative md:h-[300px] lg:h-[350px] w-full h-[200px] duration-700 ease-in-out">
                <img
                  className="w-full h-[200px] duration-1000 ease-in-out md:h-[300px] lg:h-[350px] transition-transform transform group-hover:scale-105" // Add transition and transform classes
                  src={isHover === product.id ? product.image2 : product.image1}
                  alt={product.title}
                />

                <button className="card-icon opacity-0 border-2 bg-gray-200 px-4 py-1 shadow-md absolute bottom-[-30px] duration-500 ease-linear group-hover:opacity-100 group-hover:bottom-1">
                  Add to Cart
                </button>
              </div>

              <div className="flex items-center pt-4 pb-2 justify-between">
                <h3 className="text-[12px] text-gray-600">{product.title}</h3>
                <h2
                  onClick={() => handleLoveColour(product.id)}
                  className={
                    loveColour[product.id]
                      ? "text-red-600 pr-2"
                      : "text-gray-600 pr-2"
                  }
                >
                  <IoMdHeartEmpty />
                </h2>
              </div>
              <h3 className="text-[15px] text-gray-700">{product.name}</h3>
              <p className="text-[15px] text-gray-700">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={showProducts >= allProducts.length ? "hidden" : "block"}>
        <div className=" py-7 flex justify-center">
          <NavLink
            onClick={handleShowAll}
            className="font-semibold text-[14px] text-gray-700 relative pb-1 group flex-col"
            to="/"
          >
            SEE ALL PRODUCTS
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default All;
