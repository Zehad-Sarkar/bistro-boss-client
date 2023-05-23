import CallUs from "../../../components/CallUs/CallUs";
import Featuresview from "../../../components/FeaturesView/FeaturesView";
import Featured from "../../../sharedPages/Featured/Featured";
import Bannar from "../Bannar/Bannar";
import Category from "../Category/Category";
import ChefRecommended from "../ChefRecommended/ChefRecommended";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Category></Category>
      <Featuresview></Featuresview>
      <PopularMenu></PopularMenu>
      <ChefRecommended></ChefRecommended>
      <CallUs></CallUs>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
