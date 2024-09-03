import Catagory from "../components/Home/Catagory";
import Futures from "../components/Home/Futures";
import Header from "../components/Home/Header";
import LemetedAdition from "../components/Home/LemetedAdition";
import MenWomen from "../components/Home/MenWomen";
import SprineCollection from "../components/Home/SprineCollection";
import TrandyProducts from "../components/Home/TrandyProducts";
import Uomo from "../components/Home/Uomo";
import NavBar from "../NavBar";
import Footer from "./Footer";

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
      <Futures></Futures>
      <Footer></Footer>
    </div>
  );
};

export default Home;
