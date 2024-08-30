import Catagory from "../components/Home/Catagory";
import Header from "../components/Home/Header";
import MenWomen from "../components/Home/MenWomen";
import SprineCollection from "../components/Home/SprineCollection";
import TrandyProducts from "../components/Home/TrandyProducts";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Catagory></Catagory>
      <TrandyProducts></TrandyProducts>
      <SprineCollection></SprineCollection>
      <MenWomen></MenWomen>
    </div>
  );
};

export default Home;
