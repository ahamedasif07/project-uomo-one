import instaOne from "../../../public/images/uomo-home-page-1/insta1.jpg";
import instaTwo from "../../../public/images/uomo-home-page-1/insta2.jpg";
import instaTheree from "../../../public/images/uomo-home-page-1/insta3.jpg";
import instaFour from "../../../public/images/uomo-home-page-1/insta4.jpg";
import instaFive from "../../../public/images/uomo-home-page-1/insta5.jpg";
import instaSix from "../../../public/images/uomo-home-page-1/insta6.jpg";
import instaSeven from "../../../public/images/uomo-home-page-1/insta7.jpg";
import instaEight from "../../../public/images/uomo-home-page-1/insta8.jpg";
import instaNine from "../../../public/images/uomo-home-page-1/insta9.jpg";
import instaTen from "../../../public/images/uomo-home-page-1/insta10.jpg";
import instaEleven from "../../../public/images/uomo-home-page-1/insta11.jpg";
import instaTwelb from "../../../public/images/uomo-home-page-1/insta12.jpg";

const Uomo = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-center pt-8 pb-3">@UOMO</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <img className="w-full" src={instaOne} alt="" />
        <img className="w-full" src={instaTwo} alt="" />
        <img className="w-full" src={instaTheree} alt="" />
        <img className="w-full" src={instaFour} alt="" />
        <img className="w-full" src={instaFive} alt="" />
        <img className="w-full" src={instaSix} alt="" />
        <img className="w-full" src={instaSeven} alt="" />
        <img className="w-full" src={instaEight} alt="" />
        <img className="w-full" src={instaNine} alt="" />
        <img className="w-full" src={instaTen} alt="" />
        <img className="w-full" src={instaEleven} alt="" />
        <img className="w-full" src={instaTwelb} alt="" />
      </div>
    </div>
  );
};

export default Uomo;
