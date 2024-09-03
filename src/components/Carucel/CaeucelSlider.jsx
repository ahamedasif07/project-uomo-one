import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import "./Carucel.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { useState } from "react"; // Import useState to handle state

const CaeucelSlider = () => {
  const [loveColour, setLoveColour] = useState({}); // Initialize the state

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const LemitedItems = [
    {
      id: 1,
      title: "Dresses",
      sizes: ["S", "M", "L", "XL"],
      price: 120,
      image1: "https://i.postimg.cc/Rh7CmFp2/product-0-1.jpg",

      category: "new-arrival",
      name: "Polo-Shirt",
    },
    {
      id: 2,
      title: "Dresses",
      sizes: ["S", "M", "L", "XL"],
      price: 130,
      image1: "https://i.postimg.cc/28Y8wQVY/product-1-1.jpg",

      category: "new-arrival",
      name: "Casual Shirt",
    },
    {
      id: 3,
      title: "Dresses",
      sizes: ["S", "M", "L", "XL"],
      price: 125,
      image1: "https://i.postimg.cc/Yqx2yvWW/product-2-1.jpg",

      category: "new-arrival",
      name: "Formal Shirt",
    },
    {
      id: 4,
      title: "Dresses",
      sizes: ["S", "M", "L", "XL"],
      price: 140,
      image1: "https://i.postimg.cc/Z5KYkJ8D/product-3-1.jpg",

      category: "new-arrival",
      name: "Denim Jacket",
    },
  ];

  const handleLoveColour = (id) => {
    setLoveColour((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="md:container py-5 px-2 mx-auto">
      <div className=" overflow-hidden">
        <Slider {...settings}>
          {LemitedItems.map((product) => (
            <div key={product.id}>
              <div className="w-full border-2">
                <img
                  className=" w-full p-3 h-[200px] duration-1000 ease-in-out md:h-[300px] lg:h-[350px]"
                  src={product.image1} // Fixed the incorrect variable reference
                  alt={product.title} // Added alt text
                />
                <div className="flex items-center pt-4 pb-2 justify-between px-4">
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
                <h3 className="text-[15px] text-left px-4 text-gray-700">
                  {product.name}
                </h3>
                <p className="text-[15px] text-left px-4 text-gray-700">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CaeucelSlider;
