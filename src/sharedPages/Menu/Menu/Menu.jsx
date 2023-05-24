import { Helmet } from "react-helmet-async";
import Cover from "../../Cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg";
import dessertImage from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import soupImage from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/UseMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((items) => items.category === "dessert");
  const salad = menu.filter((items) => items.category === "salad");
  const soup = menu.filter((items) => items.category === "soup");
  const pizza = menu.filter((items) => items.category === "pizza");
  const offered = menu.filter((items) => items.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bristo Boss | Our Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImage} title="our menu"></Cover>
      <SectionTitle
        subHeading="don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* offered menu items*/}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        title={"dessert"}
        img={dessertImage}
      ></MenuCategory>
      {/* Pizza menu items */}
      <MenuCategory
        items={pizza}
        title={"pizza"}
        img={pizzaImage}
      ></MenuCategory>
      {/* Salad menu items */}
      <MenuCategory
        items={salad}
        title={"salad"}
        img={saladImage}
      ></MenuCategory>
      {/* Soup menu items */}
      <MenuCategory
        items={soup}
        title={"soup"}
        img={soupImage}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
