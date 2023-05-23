import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../../sharedPages/MenuItems/MenuItems";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  console.log(menu);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter(
          (items) => items.category === "popular"
        );
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="mb-12">
      <SectionTitle
        subHeading="---Popular Items---"
        heading="From Our Menu"
      ></SectionTitle>

      <div className="grid gap-10 md:grid-cols-2">
        {menu.map(item=><MenuItems key={item._id} item={item}></MenuItems>)}
      </div>
    </section>
  );
};

export default PopularMenu;
