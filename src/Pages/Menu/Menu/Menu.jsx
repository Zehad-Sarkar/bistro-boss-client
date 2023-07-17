import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import menuCover from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import soupImage from "../../../assets/menu/soup-bg.jpg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../hooks/menu/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((popular) => popular.category === "dessert");
  // const populars = menu.filter((popular) => popular.category === "popular");
  const salad = menu.filter((popular) => popular.category === "salad");
  const soup = menu.filter((popular) => popular.category === "soup");
  const pizza = menu.filter((popular) => popular.category === "pizza");
  const offered = menu.filter((popular) => popular.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | menu </title>
      </Helmet>
      {/* menu cover */}
      <Cover img={menuCover} title={"Our Menu"}></Cover>
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Todays Offer"}
      ></SectionTitle>

      {/* offered menu */}
      <MenuCategory items={offered} />
      {/* dessert menu */}
      <MenuCategory
        items={dessert}
        coverImg={dessertImg}
        title={"dessert"}
      ></MenuCategory>
      {/* pizza menu */}
      <MenuCategory
        items={pizza}
        coverImg={pizzaImage}
        title={"pizza"}
      ></MenuCategory>
      {/* soup menu */}
      <MenuCategory
        items={soup}
        coverImg={soupImage}
        title={"soup"}
      ></MenuCategory>
      {/* salad menu */}
      <MenuCategory
        items={salad}
        coverImg={saladImage}
        title={"salad"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
