import Swiper from "/src/component/Swiper";
import Boxcategory from "../../component/Boxcategory";
import { useContext } from "react";
import { context } from "../../context/Usercontext";
import { v4 as uuidv4 } from "uuid";
import "./Home.css";
import TransitionPage from "../../component/TransitionPage";
const Home = () => {
  const categories = useContext(context);

  return (
    
    <div>
      <TransitionPage>
      <Swiper />
      </TransitionPage>
      {categories.map((category) => (
        <Boxcategory key={uuidv4()} category={category} />
      ))}
    </div>
  );
};

export default Home;
