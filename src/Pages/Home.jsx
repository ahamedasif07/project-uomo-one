import Catagory from "../components/Home/Catagory";
import Header from "../components/Home/Header";
import LemetedAdition from "../components/Home/LemetedAdition";
import MenWomen from "../components/Home/MenWomen";
import SprineCollection from "../components/Home/SprineCollection";
import TrandyProducts from "../components/Home/TrandyProducts";
import Uomo from "../components/Home/Uomo";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Catagory></Catagory>
      <TrandyProducts></TrandyProducts>
      <SprineCollection></SprineCollection>
      <MenWomen></MenWomen>
      <LemetedAdition></LemetedAdition>
      <Uomo></Uomo>
    </div>
  );
};

export default Home;
